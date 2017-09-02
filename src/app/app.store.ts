import { createStore, StoreEnhancer } from 'redux';
import { appReducer } from './app.reducer';

const reduxDevtoolsExtension: () => StoreEnhancer<void> = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
export const store = createStore(
  appReducer,
  reduxDevtoolsExtension && reduxDevtoolsExtension(),
);
