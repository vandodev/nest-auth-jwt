import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const users = [
    {
      id: 1,
      username: 'user1@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
   },
    {
      id: 2,
      username: 'user2@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    },
    {
      id: 3,
      username: 'user3@user.com',
      password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    },
  ];//bcrypt

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    login(username: string, password: string){
        // console.log(username, password)
        const user = this.validateCredentials(username, password);

        const payload = {
          sub: user.id,
          username: user.username,
        };

        return this.jwtService.sign(payload);
    }
    
    validateCredentials(username: string, password: string) {
      const user = users.find(
        (u) =>
          u.username === username && bcrypt.compareSync(password, u.password),
      );

      return user;
    }
}
