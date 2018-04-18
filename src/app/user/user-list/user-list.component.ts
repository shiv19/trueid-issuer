import { Component, OnInit } from '@angular/core';
// import trueID from '../../web3/trueID';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  userAddresses = [];

  constructor() { }

  async ngOnInit() {
    // this.users = this.userService.getUsers();
    // this.userAddresses = await trueID.methods.getUsers().call();
    // console.log(this.userAddresses);
    // for (let i = 0; i < this.userAddresses.length; i++) {
    //   const user: any = {};
    //   const result = await trueID.methods.getUser(this.userAddresses[i]).call();
    //   user.address = this.userAddresses[i];
    //   user.fullName = result[0];
    //   user.fatherName = result[1];
    //   user.motherName = result[2];
    //   user.contactAddress = result[3];
    //   user.gender = result[4];
    //   user.birthdate = result[5];
    //   user.country = result[6];

    //   this.users.push(user);
    // }
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  onDeleteUser(userIndex) {
    userIndex = +userIndex;
    const index = this.users.indexOf(this.users[userIndex]);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

}
