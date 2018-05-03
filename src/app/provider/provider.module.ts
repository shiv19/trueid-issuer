import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderListItemComponent } from './provider-list/provider-list-item/provider-list-item.component';
import { RouterModule } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ZXingScannerModule.forRoot(),
        FormsModule
    ],
    declarations: [
        ProviderComponent,
        ProviderListComponent,
        ProviderListItemComponent,
        AddProviderComponent
    ],
    providers: []
})
export class ProviderModule {}
