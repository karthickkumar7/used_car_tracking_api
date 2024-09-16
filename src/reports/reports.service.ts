import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  reports() {
    return 'reports testing...';
  }
}
