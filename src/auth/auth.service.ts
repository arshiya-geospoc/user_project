import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && user[0].password == pass){
        return user;
    }
    return null;
  }
}