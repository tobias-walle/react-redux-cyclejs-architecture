import * as React from 'react';

export interface ISearchProps {
  onSearch: (search: string) => void;
  search: string;
}

export const Search = ({search = '', onSearch}: ISearchProps) => (
  <input type='text' value={search} onChange={(event) => onSearch && onSearch(event.target.value)}/>
);
