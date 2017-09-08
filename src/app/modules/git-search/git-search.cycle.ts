import { Main } from 'redux-cycles';
import xs from 'xstream';
import debounce from 'xstream/extra/debounce';
import { ActionStream } from '../../models/action-stream';
import { ActionSink, Sinks } from '../../models/sinks';
import { Sources } from '../../models/sources';
import { httpRequestDuck, httpResponseDuck, HttpResponsePayload } from '../http/http.duck';
import { setSearchDuck, setSearchErrorDuck, SetSearchPayload, setSearchResultsDuck } from './git-search.duck';

const GIT_SEARCH_CATEGORY = 'app/git-search/SEARCH';

export type GitSearchSources = Pick<Sources, 'ACTION' | 'HTTP'>;
export type GitSearchSinks = Pick<Sinks, 'ACTION'>;

export const gitSearchCycle: Main<GitSearchSources, GitSearchSinks> = (sources) => {
  const setSearchAction$: ActionStream<SetSearchPayload> = sources.ACTION
    .filter((action) => action.type === setSearchDuck.actionType)
    .debug('action');

  const httpRequestAction$ = setSearchAction$
    .compose(debounce(1000))
    .map((action) => httpRequestDuck({
      category: GIT_SEARCH_CATEGORY,
      options: {
        url: 'https://api.github.com/search/users',
        query: {
          q: action.payload!.search,
        },
      },
    }));

  const httpResponseAction$: ActionStream<HttpResponsePayload> = sources.ACTION
    .filter((action) => action.type === httpResponseDuck.actionType);

  const setSearchResultsAction$: ActionSink = httpResponseAction$
    .filter((action) => action.payload!.category === GIT_SEARCH_CATEGORY)
    .map((action) => {
      const {error, body = {}} = action.payload!.response;
      if (error) {
        return setSearchErrorDuck({error: body.message});
      } else {
        return setSearchResultsDuck({searchResults: body.items || []});
      }
    });

  return {
    ACTION: xs.merge(httpRequestAction$, setSearchResultsAction$),
  };
};
