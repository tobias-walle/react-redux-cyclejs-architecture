import { RequestOptions } from '@cycle/http';
import { createDuck, createReducer } from 'redux-typed-ducks';

export interface HttpState {
  [category: string]: IHttpItemState;
}

const initialState: HttpState = {};

export interface IHttpItemState {
  loading: boolean;
  response?: IHttpResponse;
}

export interface IHttpResponse {
  error: Error;
  status: number;
  body: any;
  text: string;
}

export interface HttpRequestPayload {
  category: string;
  options: RequestOptions;
}

export const httpRequestDuck = createDuck<HttpState, HttpRequestPayload>(
  'app/http/REQUEST',
  (state, {category, options}) => {
    return {
      ...state,
      [category]: {
        loading: true,
        result: undefined,
      },
    };
  },
);

export interface HttpResponsePayload {
  category: string;
  response: IHttpResponse;
}

export const httpResponseDuck = createDuck<HttpState, HttpResponsePayload>(
  'app/http/RESPONSE',
  (state, {category, response}) => {
    return {
      ...state,
      [category]: {
        loading: false,
        result: response,
      },
    };
  },
);

export const httpReducer = createReducer(
  [httpRequestDuck, httpResponseDuck],
  initialState,
);
