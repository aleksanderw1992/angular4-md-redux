import {Component, OnInit} from '@angular/core';
import {MdDialog, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";
import {LoginDialogComponent} from "../auth/login-dialog/login-dialog.component";
import {Store} from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as fromAuthActions from "../auth/store/auth.actions";
import * as fromAuth from "../auth/store/auth.reducers";
import {Observable} from "rxjs/Observable";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer, public dialog: MdDialog,
              private store: Store<fromApp.AppState>,
              private authenticatedUserService: AuthenticatedUserService) {
    mdIconRegistry.addSvgIcon('custom-login', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login-svg.svg'));
    mdIconRegistry.addSvgIcon('custom-logout', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/logout-svg.svg'));
  }


  ngOnInit() {
  }

  login() {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true,
      role: 'dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      switch (result.loginType) {
        case 'login':
          this.store.dispatch(new fromAuthActions.TryLoginAction(result.data));
          break
        case 'signup':
          this.store.dispatch(new fromAuthActions.TrySignupAction(result.data));
          break
      }
    });
  }

  logout() {
    this.store.dispatch(new fromAuthActions.LogoutAction());
  }

}
