import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderListItemComponent } from './provider-list/provider-list-item/provider-list-item.component';
import { RouterModule } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        ProviderComponent,
        ProviderListComponent,
        ProviderListItemComponent
    ],
    providers: [ ProviderService ]
})
export class ProviderModule {}
