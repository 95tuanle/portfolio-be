import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('github')
export class GithubController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  async getCurrentGitHubUser(): Promise<JSON> {
    try {
      return await this.appService.getCurrentGitHubUser();
    } catch (error) {
      return error;
    }
  }

  @Get('user/repos')
  async getGitHubReposBasedOnCurrentUser(): Promise<JSON> {
    try {
      return await this.appService.getGitHubReposBasedOnCurrentUser();
    } catch (error) {
      return error;
    }
  }
}
