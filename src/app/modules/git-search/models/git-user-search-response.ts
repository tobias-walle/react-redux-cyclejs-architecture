import { GitUser } from './git-user';

export interface GitUserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitUser[];
}
