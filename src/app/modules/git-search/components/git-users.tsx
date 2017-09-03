import * as React from 'react';
import { PureComponent } from 'react';
import { GitUser } from '../models/git-user';
import { GitUserItem } from './git-user-item';

export interface GitUsersProps {
  users: GitUser[];
}

export class GitUsers extends PureComponent<GitUsersProps, {}> {
  public render() {
    return (
      <ul>
        {this.props.users.map((user) => <GitUserItem key={user.id} user={user}/>)}
      </ul>
    );
  }
}
