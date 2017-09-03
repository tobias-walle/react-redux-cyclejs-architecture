import * as React from 'react';
import { PureComponent } from 'react';
import styled from 'styled-components';
import { GitUser } from '../models/git-user';
import { GitUserItem } from './git-user-item';

const StyledUl = styled.ul`
  & {
    margin: 0;
    padding: 0;
  }
`;

export interface GitUsersProps {
  users: GitUser[];
}

export class GitUsers extends PureComponent<GitUsersProps, {}> {
  public render() {
    return (
      <StyledUl>
        {this.props.users.map((user) => <GitUserItem key={user.id} user={user}/>)}
      </StyledUl>
    );
  }
}
