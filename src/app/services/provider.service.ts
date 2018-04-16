import { Injectable } from '@angular/core';

@Injectable()
export class ProviderService {

  private providers = [
    {
      name: 'Airtel',
      address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88'
    },
    {
      name: 'BSNL',
      address: '0x6f46cf5569aefa1acc1009290c8e043747172d89'
    },
    {
      name: 'Idea',
      address: '0x281055afc982d96fab65b3a49cac8b878184cb16'
    },
    {
      name: 'Vodafone',
      address: '0x90e63c3d53e0ea496845b7a03ec7548b70014a91'
    },
    {
      name: 'Jio',
      address: '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e'
    }
  ];

  constructor() { }

  getProviders() {
    return this.providers.slice();
  }

}
