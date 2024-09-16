import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users() {
    return 'user testing...';
  }
}
