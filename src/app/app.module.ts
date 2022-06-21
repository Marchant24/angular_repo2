import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { FormCardComponent } from './componets/form-card/form-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardcomponentComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
