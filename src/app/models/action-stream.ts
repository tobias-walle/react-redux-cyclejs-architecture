import { Action } from 'redux-typed-ducks';
import { Stream } from 'xstream';

export type ActionStream<Payload> = Stream<Action<Payload>>;
