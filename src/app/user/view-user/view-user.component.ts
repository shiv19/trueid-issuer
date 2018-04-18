import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit, OnDestroy {

  user: any = {};
  userIndex: number;
  constructor(private router: Router) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    const currentUserIndex = localStorage.getItem('currentUserIndex');
    if (!currentUser) {
      this.router.navigate(['/users']);

      return;
    }
    this.user = JSON.parse(currentUser);
    this.user.birthdate = new Date(this.user.birthdate);
    this.userIndex = +currentUserIndex;
  }

  ngOnDestroy() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserIndex');
  }

  onSave(user) {
    const users: any = JSON.parse(localStorage.getItem('users'));
    users[this.userIndex] = this.user;
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/users']);
  }

  onDeleteUser() {
    const users: any = JSON.parse(localStorage.getItem('users'));
    users[this.userIndex] = this.user;
    const index = users.indexOf(users[this.userIndex]);

    if (index !== -1) {
      users.splice(index, 1);
    }

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserIndex');
    this.router.navigate(['/users']);
  }

}
