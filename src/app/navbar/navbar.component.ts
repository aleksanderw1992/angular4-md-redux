import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('custom-login', '/icons/login-svg.svg');
    mdIconRegistry.addSvgIcon('custom-logout', '/icons/logout-svg.svg');
  }

  ngOnInit() {
  }

}
