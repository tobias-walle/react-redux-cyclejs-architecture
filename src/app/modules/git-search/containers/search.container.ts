import { connect, Dispatch } from 'react-redux';
import { IAppState } from '../../../app.reducer';
import { ISearchProps, Search } from '../components/search';
import { setSearchDuck } from '../git-search.duck';

const mapStateToProps = (state: IAppState): Partial<ISearchProps> => {
  return {
    search: state.gitSearch.search,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): Partial<ISearchProps> => {
  return {
    onSearch: (search) => dispatch(setSearchDuck({ search })),
  };
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
