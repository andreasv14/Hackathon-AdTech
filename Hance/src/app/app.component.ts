import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserData } from './models/userdata';
  
interface Advertise {
    id?: string;
    imageSource?: string;
    url?: string;
}

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
  advertisements: Advertise[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  get getIsLoginView() {
    return this.isLoginView;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.advertisements = [
    {
          id: '1',
          imageSource: '../assets/images/adtech-banner.png',
          url: 'Racing car',
    },
    {
      id: '2',
      imageSource: '../assets/images/adtech-banner.png',
      url: 'Racing car',
    }
  ];
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

