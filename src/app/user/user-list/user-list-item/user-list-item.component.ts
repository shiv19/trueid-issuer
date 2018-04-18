import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input('user') user;
  @Input('index') index;
  @Output() deleteUser = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit() {}

  onClickView() {
    localStorage.setItem('currentUserIndex', (this.index - 1) + '' );
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.router.navigate(['/view-user/']);
  }

  onClickDelete() {
    this.deleteUser.emit((this.index - 1) + '');
  }

}
