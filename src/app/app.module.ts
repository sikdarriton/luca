import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LucaFormComponent } from './luca-form/luca-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LucaListComponent } from './luca-list/luca-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LucaFormComponent,
    LucaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
