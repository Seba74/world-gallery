import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxCursorModule } from 'ngx-cursor';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { imageEffect } from './state/effects/image.effect';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryEffect } from './state/effects/country.effect';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxCursorModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'Gallery App', maxAge: 25, logOnly: isDevMode()}),
    EffectsModule.forRoot([imageEffect, CountryEffect]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
