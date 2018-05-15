import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import trueID from '../../web3/trueID';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: any = {};
  addresses: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    if (!this.user) {
      this.router.navigate(['/users']);
    }

    this.addresses = localStorage.getItem('accounts');

    if (!this.addresses) {
        this.router.navigate(['/users']);
    } else {
        this.addresses = JSON.parse(this.addresses);
    }
  }

  async onSave(value) {
    await trueID.methods.editUser(
        this.user.address,
        value.fullName,
        value.fatherName,
        value.motherName,
        value.contactAddress,
        value.gender,
        value.birthdate,
        value.country
    ).send({
        gas: 2000000,
        from: this.addresses[0]
    });
  }

}
