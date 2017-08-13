import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdIconRegistry, MdInputModule, MdMenuModule, MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import {CardService} from "./card/card.service";
import { SendMessageCardComponent } from './send-message-card/send-message-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent,
    SendMessageCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdInputModule
  ],
  providers: [MdIconRegistry, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
