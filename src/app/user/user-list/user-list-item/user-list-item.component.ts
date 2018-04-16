import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input('user') user;
  @Input('index') index;
  constructor(private router: Router) { }

  ngOnInit() {}

  onClickView() {
    console.log('view user');
    this.router.navigate(['/view-user/', this.index - 1]);
  }

}
