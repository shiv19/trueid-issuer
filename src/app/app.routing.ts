import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderListComponent } from './provider/provider-list/provider-list.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AddProviderComponent } from './provider/add-provider/add-provider.component';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UserComponent, children: [
        { path: '', component: UserListComponent, pathMatch: 'full' }
    ] },
    { path: 'view-user', component: ViewUserComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'add-provider', component: AddProviderComponent },
    { path: 'providers', component: ProviderComponent, children: [
        { path: '', component: ProviderListComponent, pathMatch: 'full' }
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
    exports: [],
    providers: []
})
export class AppRoutingModule {}
