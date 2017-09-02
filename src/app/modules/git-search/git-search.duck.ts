import { createDuck, createReducer } from 'redux-typed-ducks';

export interface IGitSearchState {
  search: string;
}

const initialState: IGitSearchState = {
  search: '',
};

export interface ISetSearchPayload {
  search: string;
}
export const setSearchDuck = createDuck<IGitSearchState, ISetSearchPayload>(
  'app/git-search/SET_SEARCH',
  (state, payload) => {
    return {
      ...state,
      search: payload.search,
    };
  },
);

export const gitSearchReducer = createReducer([setSearchDuck], initialState);
