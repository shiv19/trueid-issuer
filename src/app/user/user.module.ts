import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';
import { DateValueAccessorDirective } from '../directives/date-value-accessor.directive';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ZXingScannerModule.forRoot()
    ],
    declarations: [
        AddUserComponent,
        UserListComponent,
        UserListItemComponent,
        UserComponent,
        ViewUserComponent,
        DateValueAccessorDirective
    ]
})
export class UserModule {}
