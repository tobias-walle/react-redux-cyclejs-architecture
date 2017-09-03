import { Action } from 'redux-typed-ducks';
import xs, { Stream } from 'xstream';
import { ActionStream } from '../../models/action-stream';
import { HTTPSink, Sinks } from '../../models/sinks';
import { Sources } from '../../models/sources';
import { httpRequestDuck, HttpRequestPayload, httpResponseDuck, HttpResponsePayload } from './http.duck';

export function httpCycle(sources: Sources): Partial<Sinks> {
  const httpRequestActions$: ActionStream<HttpRequestPayload> = sources.ACTION
    .filter((action) => action.type === httpRequestDuck.actionType);

  const httpSink$: HTTPSink = httpRequestActions$
    .map((action) => {
      const {category, options} = action.payload!;
      return {...options, category};
    });

  const httpResponseAction$: Stream<Action<HttpResponsePayload>> = sources.HTTP
    .select()
    .map((httpResponseStream$) => {
      return httpResponseStream$.replaceError((err) => xs.of(err.response));
    })
    .flatten()
    .filter((response) => response.request.category != null)
    .map((response) => httpResponseDuck({
      category: response.request.category as string,
      response: {
        error: response.error,
        status: response.status,
        body: response.body,
        text: response.text,
      },
    }));

  return {
    HTTP: httpSink$,
    ACTION: httpResponseAction$,
  };
}
