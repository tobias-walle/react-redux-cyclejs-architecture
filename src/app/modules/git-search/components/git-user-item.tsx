import * as React from 'react';
import { PureComponent } from 'react';
import styled from 'styled-components';
import { SHADOW_LEVELS } from '../../core/constants/shadows';
import { GitUser } from '../models/git-user';

const Wrapper = styled.li`
  & {
    display: flex;
    flex-direction: row;
    box-shadow: ${SHADOW_LEVELS[0]};
    width: 100%;
    list-style: none;
    background: white;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
`;

const UserImg = styled.img`
  & {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
  }
`;

const UserInformation = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > *:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

const UserLogin = styled.div`
  & {
    font-size: 1.3rem;
  }
`;

const ScoreValue = styled.span`
  & {
    font-size: 1.0rem;
    font-weight: bold;
  }
`;

const ScoreLabel = styled.span`
  & {
    font-size: 1.0rem;
  }
`;

export interface GitUserItemProps {
  user: GitUser;
}

export class GitUserItem extends PureComponent<GitUserItemProps, {}> {
  public render() {
    const {user} = this.props;
    return (
      <Wrapper>
        <a href={user.html_url}>
          <UserImg src={user.avatar_url}/>
        </a>
        <UserInformation>
          <UserLogin>{user.login}</UserLogin>
          <div>
            <ScoreLabel>Score: </ScoreLabel>
            <ScoreValue>{user.score}</ScoreValue>
          </div>
        </UserInformation>
      </Wrapper>
    );
  }
}