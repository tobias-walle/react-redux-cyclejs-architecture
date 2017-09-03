import { makeHTTPDriver } from '@cycle/http';
import { run } from '@cycle/run';
import { combineCycles } from 'redux-cycles';
import { cycleMiddleware } from './middleware/cycle.middleware';
import { gitSearchCycle } from './modules/git-search/git-search.cycle';
import { httpCycle } from './modules/http/http.cycle';

export const startCycleApp = () => {
  run(combineCycles(
    httpCycle,
    gitSearchCycle,
  ), {
    ACTION: cycleMiddleware.makeActionDriver(),
    HTTP: makeHTTPDriver(),
  } as any);
};
