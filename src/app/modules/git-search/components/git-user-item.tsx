import * as React from 'react';
import { PureComponent } from 'react';
import { GitUser } from '../models/git-user';

export interface GitUserItemProps {
  user: GitUser;
}

export class GitUserItem extends PureComponent<GitUserItemProps, {}> {
  public render() {
    const {user} = this.props;
    return (
      <li>
        <b>{user.login}</b>
      </li>
    );
  }
}