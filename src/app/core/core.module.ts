import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
