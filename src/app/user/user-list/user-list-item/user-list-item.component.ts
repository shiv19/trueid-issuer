import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input('user') user;
  @Input('index') index;
  @Output() deleteUser: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  onClickView() {
    this.userService.currentUser = this.user;
    this.router.navigate(['/view-user/']);
  }

  onClickDelete() {
    this.deleteUser.emit(this.user.address);
  }

}
