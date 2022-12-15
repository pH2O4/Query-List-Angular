import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


import { QueryListComponent } from './Componentes/query-list/query-list.component';
import { ProfissionalsListComponent } from './Componentes/profissionals-list/profissionals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryListComponent,
    ProfissionalsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
