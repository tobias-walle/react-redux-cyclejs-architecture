import { applyMiddleware, compose, createStore } from 'redux';
import { appReducer } from './app.reducer';
import { cycleMiddleware } from './middleware/cycle.middleware';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(
      cycleMiddleware,
    ),
  ),
);
