import { Injectable } from '@nestjs/common';

import {UserDto} from './dto/user.dto'

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id:1,
      firstName: "Sam", 
      lastName: "Kohl",
      age: 21
    },
    {
      id:2,
      firstName: "Dash", 
      lastName: "Cam",
      age: 28
    },
  ];
  
  findAll(){
    return this.users;
  }

}
