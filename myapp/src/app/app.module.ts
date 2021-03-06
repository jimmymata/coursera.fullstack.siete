import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { ReactiveFormsModule } from '@angular/forms';

import { CopyrightComponent } from './components/copyright/copyright.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { ProductComponent } from './components/product/product.component';

import { ProductService } from "./services/product.service";
import { LoginService } from "./services/login.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    SocialmediaComponent,
    ProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule
  ],
  providers: [
    ProductService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
