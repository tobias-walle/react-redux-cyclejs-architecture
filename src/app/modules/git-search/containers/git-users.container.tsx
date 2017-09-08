import { connect } from 'react-redux';
import { AppState } from '../../../app.reducer';
import { GitUsers, GitUsersProps } from '../components/git-users';

export const GitUsersContainer = connect(
  (state: AppState): GitUsersProps => ({
    users: state.gitSearch.searchResults,
    loading: state.gitSearch.loading,
    error: state.gitSearch.error,
  }),
)(GitUsers);
