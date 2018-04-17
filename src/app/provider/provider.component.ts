import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddProvider() {
    console.log('add provider');
    this.router.navigate(['/add-provider']);
  }

}
