import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers;
  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providers = this.providerService.getProviders();
  }

}
