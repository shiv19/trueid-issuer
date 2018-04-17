import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    console.log(this.user);
  }

  onClickView() {
    this.userService.currentUser = this.user;
    this.router.navigate(['/view-user/']);
  }

}
