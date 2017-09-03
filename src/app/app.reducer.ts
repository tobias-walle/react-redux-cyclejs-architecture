import { combineReducers } from 'redux';
import { gitSearchReducer, GitSearchState } from './modules/git-search/git-search.duck';
import { httpReducer, HttpState } from './modules/http/http.duck';

export interface AppState {
  http: HttpState;
  gitSearch: GitSearchState;
}

export const appReducer = combineReducers({
  http: httpReducer,
  gitSearch: gitSearchReducer,
});
