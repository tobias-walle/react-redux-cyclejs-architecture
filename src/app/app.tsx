import * as React from 'react';
import { Provider } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { store } from './app.store';
import { GitUsersContainer } from './modules/git-search/containers/git-users.container';
import { SearchContainer } from './modules/git-search/containers/search.container';

// language=PostCSS
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  body {
    overflow-y: scroll;
    background: #F5F5F5;
  }

  body, input {
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

// language=PostCSS
const AppContent = styled.div`
  & {
    max-width: 600px;
    margin: auto;
  }
`;

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppContent>
          <SearchContainer/>
          <GitUsersContainer/>
        </AppContent>
      </Provider>
    );
  }
}
