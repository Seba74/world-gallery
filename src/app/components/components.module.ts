import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MainPageComponent } from './main-page/main-page.component';
import { NgxCursorModule } from 'ngx-cursor';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

@NgModule({
  declarations: [ 
    MainPageComponent, HomeComponent, GalleryComponent, ViewGalleryComponent
  ],
  imports: [
    CommonModule,
    DragScrollModule,
    NgxCursorModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],
  exports: [
    MainPageComponent,
    HomeComponent,
    GalleryComponent
  ]
})
export class ComponentsModule { }
