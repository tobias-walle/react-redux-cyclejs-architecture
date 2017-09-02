import { combineReducers } from 'redux';
import { gitSearchReducer, IGitSearchState } from './modules/git-search/git-search.duck';

export interface IAppState {
  gitSearch: IGitSearchState;
}

export const appReducer = combineReducers({
  gitSearch: gitSearchReducer,
});
