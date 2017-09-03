import { createDuck, createReducer } from 'redux-typed-ducks';
import { GitUser } from './models/git-user';

export interface GitSearchState {
  search: string;
  searchResults: GitUser[];
}

const initialState: GitSearchState = {
  search: '',
  searchResults: [],
};

export interface SetSearchPayload {
  search: string;
}
export const setSearchDuck = createDuck<GitSearchState, SetSearchPayload>(
  'app/git-search/SET_SEARCH',
  (state, payload) => {
    return {
      ...state,
      search: payload.search,
    };
  },
);

export interface SetSearchResultsPayload {
  searchResults: GitUser[];
}
export const setSearchResultsDuck = createDuck<GitSearchState, SetSearchResultsPayload>(
  'app/git-search/SET_SEARCH_RESULTS',
  (state, payload) => {
    return {
      ...state,
      searchResults: payload.searchResults,
    };
  },
);

export const gitSearchReducer = createReducer([
  setSearchDuck,
  setSearchResultsDuck,
], initialState);
