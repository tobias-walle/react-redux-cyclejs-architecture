import * as React from 'react';
import { Input } from '../../form/components/input';

// language=PostCSS
const SearchInput = Input.extend`
  & {
    margin-bottom: 1.6rem;
  }
`;

export interface ISearchProps {
  onSearch: (search: string) => void;
  search: string;
}

export const Search = ({search = '', onSearch}: ISearchProps) => (
  <SearchInput
    type='text'
    value={search}
    onChange={(event) => onSearch && onSearch((event.target as any).value)}
    placeholder='Search Users'
  />
);
