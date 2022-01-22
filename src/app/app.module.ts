import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { MaterialModule } from './material/material.module';
import { DialogForDelete } from './contacts/pages/list/list.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainPageComponent,
    DialogForDelete
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
