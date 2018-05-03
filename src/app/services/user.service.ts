import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public currentUser: any;

  constructor() { }

  getUser() {
    return this.currentUser;
  }

}
