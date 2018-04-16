import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserComponent } from './user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { ViewUserComponent } from './view-user/view-user.component';
import { DateValueAccessorDirective } from '../directives/date-value-accessor.directive';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [
        AddUserComponent,
        UserListComponent,
        UserListItemComponent,
        UserComponent,
        EditUserComponent,
        ViewUserComponent,
        DateValueAccessorDirective
    ],
    providers: [ UserService ]
})
export class UserModule {}
