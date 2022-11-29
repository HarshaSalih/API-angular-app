import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewPublicdataComponent } from './view-publicdata/view-publicdata.component';
import { ViewUserinfoComponent } from './view-userinfo/view-userinfo.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUserdataComponent } from './view-userdata/view-userdata.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { ViewQuotesappComponent } from './view-quotesapp/view-quotesapp.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewPublicdataComponent,
    ViewUserinfoComponent,
    ViewProductComponent,
    ViewUserdataComponent,
    ViewTodoComponent,
    ViewQuotesappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
