import { RequestInput } from '@cycle/http';
import { Action } from 'redux';
import { Stream } from 'xstream';

export type ActionSink = Stream<Action>;
export type HTTPSink = Stream<RequestInput>;

export interface Sinks {
  ACTION: ActionSink;
  HTTP: HTTPSink;
}
