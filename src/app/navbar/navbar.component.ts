import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('custom-login', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/login-svg.svg'));
    mdIconRegistry.addSvgIcon('custom-logout', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout-svg.svg'));
  }

  ngOnInit() {
  }

}
