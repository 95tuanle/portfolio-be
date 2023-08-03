import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): string {
    return '<h1>Portfolio Back-end</h1><p>Nguyen Anh Tuan Le</p>';
  }
}
