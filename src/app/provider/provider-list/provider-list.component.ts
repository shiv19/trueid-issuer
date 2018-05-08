import { Component, OnInit } from '@angular/core';
import trueID from '../../web3/trueID';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers: any = [];
  providerAddresses;
  addresses: any;
  constructor() { }

  async ngOnInit() {
    this.addresses = localStorage.getItem('accounts');

    if (this.addresses) {
        this.addresses = JSON.parse(this.addresses);
    }

    this.getProviders();
  }

  async getProviders() {
    this.providerAddresses = await trueID.methods.getProviders().call({"from": this.addresses[0]});

    for (let i = 0; i < this.providerAddresses.length; i++) {
      const provider: any = {};
      const result = await trueID.methods.getProvider(this.providerAddresses[i]).call();
      provider.address = this.providerAddresses[i];
      provider.name = result[0];
      provider.contactAddress = result[1];
      provider.email = result[2];

      this.providers.push(provider);
    }
  }

}
