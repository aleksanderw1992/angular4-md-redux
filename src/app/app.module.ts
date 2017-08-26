import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MaterialModule,
  MdButtonModule, MdCardModule, MdIconModule, MdIconRegistry, MdInputModule, MdMenuModule, MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import {CardService} from "./card/card.service";
import { SendMessageCardComponent } from './send-message-card/send-message-card.component';
import { LoginDialogComponent } from './auth/login-dialog/login-dialog.component';
import {UserService} from "./auth/user.service";
import {AuthenticatedUserService} from "./auth/authenticatedUser.service";
import {CustomErrorHandler} from "./common/CustomErrorHandler";
import {CardColorsService} from "./card/card-colors.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/app.reducers";
import {AuthEffects} from "./auth/store/auth.effects";
import {EffectsModule} from "@ngrx/effects";
import {CardEffects} from "./card/store/card.effects";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent,
    SendMessageCardComponent,
    LoginDialogComponent
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
    MdInputModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, CardEffects])



  ],
  providers: [MdIconRegistry, CardService, UserService, AuthenticatedUserService, CustomErrorHandler, CardColorsService],
  entryComponents: [LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
