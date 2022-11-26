import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserData } from './models/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hance';
  isLoginView = false;
  isRegisterView = false;
  userData: UserData = new UserData;

  constructor(private primengConfig: PrimeNGConfig) {}

  get getIsLoginView() {
    return this.isLoginView;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showLoginView() {
    this.isLoginView = true;
  }

  showHomeView() {
    this.isLoginView = false;
  }

  login() {
    console.log(this.userData.email)
    console.log(this.userData.password)
  }
}

