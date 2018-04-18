import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers;
  constructor() { }

  ngOnInit() {
    this.providers = JSON.parse(localStorage.getItem('providers'));
  }

  onDeleteProvider(providerIndex) {
    providerIndex = +providerIndex;
    const index = this.providers.indexOf(this.providers[providerIndex]);

    if (index !== -1) {
      this.providers.splice(index, 1);
    }
    localStorage.setItem('providers', JSON.stringify(this.providers));
  }

}
