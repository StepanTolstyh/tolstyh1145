import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { BaseHttp } from './shared/services/basehttp';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortingPipe } from './shared/pipes/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ItemsComponent,
    ItemsEditComponent,
    ItemsListComponent,
    FilterPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
