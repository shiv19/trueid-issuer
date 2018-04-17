import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import trueID from '../../web3/trueID';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  userAddresses = [];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userAddresses = await trueID.methods.getUsers().call();
    console.log(this.userAddresses);
    for (let i = 0; i < this.userAddresses.length; i++) {
      const user: any = {};
      const result = await trueID.methods.getUser(this.userAddresses[i]).call();
      user.address = this.userAddresses[i];
      user.fullName = result[0];
      user.fatherName = result[1];
      user.motherName = result[2];
      user.contactAddress = result[3];
      user.gender = result[4];
      user.birthdate = result[5];
      user.country = result[6];

      this.users.push(user);
    }
    console.log(this.users);
  }

}
