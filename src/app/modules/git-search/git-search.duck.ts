import { createDuck, createReducer } from 'redux-typed-ducks';
import { GitUser } from './models/git-user';

export interface GitSearchState {
  search: string;
  searchResults: GitUser[];
  loading: boolean;
  error?: string;
}

const initialState: GitSearchState = {
  search: '',
  searchResults: [],
  loading: false,
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
      error: undefined,
      loading: true,
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
      error: undefined,
      loading: false,
    };
  },
);

export interface SetSearchErrorPayload {
  error: string;
}
export const setSearchErrorDuck = createDuck<GitSearchState, SetSearchErrorPayload>(
  'app/git-search/SET_SEARCH_ERROR',
  (state, {error}) => {
    return {
      ...state,
      searchResults: [],
      loading: false,
      error,
    };
  },
);

export const gitSearchReducer = createReducer([
  setSearchDuck,
  setSearchResultsDuck,
  setSearchErrorDuck,
], initialState);
