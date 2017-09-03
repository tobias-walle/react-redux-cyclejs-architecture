import { Action } from 'redux-typed-ducks';
import { Stream } from 'xstream';
import { HTTPSink, Sinks } from '../../cyclejs/sinks';
import { Sources } from '../../cyclejs/sources';
import { ActionStream } from '../../models/action-stream';
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
