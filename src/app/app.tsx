import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './app.store';
import { SearchContainer } from './modules/git-search/containers/search.container';

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <SearchContainer/>
      </Provider>
    );
  }
}
