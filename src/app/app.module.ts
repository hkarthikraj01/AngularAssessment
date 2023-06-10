import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactSummaryComponent } from './contacts/contact-summary/contact-summary.component';
import { AgGridModule } from 'ag-grid-angular';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsMapPinViewComponent } from './contacts/contacts-map-pin-view/contacts-map-pin-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routeConf: Routes = [
  {
    path: "",
    component: ContactSummaryComponent,
  },
  {
    path: "create",
    component: ContactDetailComponent,
  },
  {
    path: "view/:id",
    component: ContactDetailComponent,
  },
  {
    path: "edit/:id",
    component: ContactDetailComponent,
  },
  {
    path: "map",
    component: ContactsMapPinViewComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactSummaryComponent,
    ContactDetailComponent,
    ContactsMapPinViewComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    RouterModule.forChild(routeConf),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    LeafletModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
