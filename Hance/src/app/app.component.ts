import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserData } from './models/userdata';
import { Router } from '@angular/router';

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
  isUserLoggedIn = false;
  userData: UserData = new UserData;
  advertisements: Advertise[] = [];
  tags: string[] = [];

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  get getIsLoginView() {
    return this.isLoginView;
  }

  get getIsRegisterView() {
    return this.isRegisterView;
  }

  get getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.advertisements = [
    {
          id: '1',
          imageSource: '../assets/images/adtech-banner.png',
          url: 'https://hackathon22.adtechholding.com/',
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

  showRegisterView() {
    this.isRegisterView = true;
  }

  showHomeView() {
    this.isLoginView = false;
    this.isRegisterView = false;
  }

  login() {
    if (this.userData.email == 'admin' || this.userData.password == 'admin') {
      this.isUserLoggedIn = true;
      (document.getElementById('notification') as HTMLFormElement).innerHTML="logged in successfully";
      (document.getElementById('notification') as HTMLFormElement).style.color = "green";

      setTimeout(function(){
        (document.getElementById('notification') as HTMLFormElement).innerHTML="";
      },3000);
    }
  }

  onAdvertiseClick(urlSource:string){
    window.open(urlSource, '_blank');
  }
}

