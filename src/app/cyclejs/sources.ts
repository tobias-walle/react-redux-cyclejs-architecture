import { HTTPSource } from '@cycle/http';
import { Action } from 'redux';
import { Stream } from 'xstream';

export type ActionFilterFunction = (action: Action) => boolean;

export interface ActionSource {
  filter: (filterFunction: ActionFilterFunction) => Stream<Action>;
}

export interface Sources {
  ACTION: ActionSource;
  HTTP: HTTPSource;
}
