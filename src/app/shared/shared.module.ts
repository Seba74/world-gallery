import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxCursorModule } from 'ngx-cursor';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgxCursorModule,
    MatIconModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
