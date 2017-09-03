import { connect, Dispatch } from 'react-redux';
import { AppState } from '../../../app.reducer';
import { ISearchProps, Search } from '../components/search';
import { setSearchDuck } from '../git-search.duck';

const mapStateToProps = (state: AppState): Partial<ISearchProps> => {
  return {
    search: state.gitSearch.search,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>): Partial<ISearchProps> => {
  return {
    onSearch: (search) => dispatch(setSearchDuck({ search })),
  };
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
