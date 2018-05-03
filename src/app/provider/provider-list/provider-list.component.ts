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
  constructor() { }

  async ngOnInit() {
    this.getProviders();
  }

  async getProviders() {
    this.providerAddresses = await trueID.methods.getProviders().call();

    for (let i = 0; i < this.providerAddresses.length; i++) {
      const provider: any = {};
      const result = await trueID.methods.getProvider(this.providerAddresses[i]).call();
      provider.address = this.providerAddresses[i];
      provider.name = result;

      this.providers.push(provider);
    }
  }

}
