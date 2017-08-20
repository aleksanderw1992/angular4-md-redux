import {Component, OnInit} from '@angular/core';
import {MdDialog, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";
import {LoginDialogComponent} from "../auth/login-dialog/login-dialog.component";
import {UserService} from "../auth/user.service";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {CustomErrorHandler} from "../common/CustomErrorHandler";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer, public dialog: MdDialog,
              private userService: UserService,
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
      const user = result.data;

      switch (result.loginType) {
        //I know it is now duplication, but keeping for the time being
        case 'login':
          let errorOrResultLogin = this.userService.findUser(user.username, user.password);
          if(errorOrResultLogin.data){
            this.authenticatedUserService.login(errorOrResultLogin.data)
          }else{
            CustomErrorHandler.handleError(errorOrResultLogin.error)
          }
          break
        case 'signup':
          let errorOrResultSignUp = this.userService.add(user);
          if(errorOrResultSignUp.data){
            this.authenticatedUserService.login(errorOrResultSignUp.data)
          }else{
            CustomErrorHandler.handleError(errorOrResultSignUp.error)
          }
          break
      }
    });
  }
  logout(){
    this.authenticatedUserService.logout()
  }

}
