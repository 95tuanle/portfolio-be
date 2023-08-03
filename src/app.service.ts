import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';

@Injectable()
export class AppService {
  octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  getIndex(): string {
    return '<h1>Portfolio Back-end</h1><p>Nguyen Anh Tuan Le</p>';
  }

  getCurrentGitHubUser(): Promise<JSON> {
    return new Promise<JSON>((resolve, reject) => {
      this.octokit
        .request('GET /user')
        .then((result) => {
          resolve(result.data as any);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getGitHubReposBasedOnCurrentUser(): Promise<JSON> {
    return new Promise((resolve, reject) => {
      this.octokit
        .request('GET /user/repos', {
          affiliation: 'owner',
          sort: 'updated',
          per_page: 333,
        })
        .then((result) => {
          resolve(result.data as any);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
