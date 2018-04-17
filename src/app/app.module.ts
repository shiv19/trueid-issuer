import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { ProviderModule } from './provider/provider.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    ProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
