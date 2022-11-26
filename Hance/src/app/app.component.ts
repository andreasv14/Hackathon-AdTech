import { ChangeDetectorRef, Component } from '@angular/core';
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
  isUserProfileView = false;
  userData: UserData = new UserData;
  advertisements: Advertise[] = [];
  tags: string[] = [];

  constructor(
    private primengConfig: PrimeNGConfig, 
    private router: Router,
    private cd: ChangeDetectorRef,
    ) {}

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
        imageSource: '../assets/images/black-friday.png',
        url: 'https://hackathon22.adtechholding.com/',
      },
      {
        id: '3',
        imageSource: '../assets/images/electronic.png',
        url: 'https://hackathon22.adtechholding.com/',
      }
    ];

      if (localStorage.getItem('isLoggedIn')) this.isUserLoggedIn = true;
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
      localStorage.setItem('isLoggedIn', this.isUserLoggedIn.toString());
      this.isUserProfileView = false;

      (document.getElementById('notification') as HTMLFormElement).style.display="block";
      (document.getElementById('notification') as HTMLFormElement).style.color = "green";
      (document.getElementById('notification') as HTMLFormElement).innerHTML="logged in successfully";

      setTimeout(function(){
        (document.getElementById('notification') as HTMLFormElement).innerHTML="";
        (document.getElementById('notification') as HTMLFormElement).style.display="none";
      },3000);
    }
  }

  register() {
    this.isUserLoggedIn = true;
    this.isUserProfileView = false;
    localStorage.setItem('isLoggedIn', this.isUserLoggedIn.toString());

    (document.getElementById('notification') as HTMLFormElement).style.display="block";
    (document.getElementById('notification') as HTMLFormElement).style.color = "green";
    (document.getElementById('notification') as HTMLFormElement).innerHTML="registered successfully";

    setTimeout(function(){
      (document.getElementById('notification') as HTMLFormElement).innerHTML="";
      (document.getElementById('notification') as HTMLFormElement).style.display="none";
    },3000);
  }

  logout() {
    localStorage.clear();
    this.isUserLoggedIn = false;
    this.isLoginView = false;

    (document.getElementById('notification') as HTMLFormElement).style.display="block";
    (document.getElementById('notification') as HTMLFormElement).style.color = "red";
    (document.getElementById('notification') as HTMLFormElement).innerHTML="logged out";

    setTimeout(function(){
      (document.getElementById('notification') as HTMLFormElement).innerHTML="";
      (document.getElementById('notification') as HTMLFormElement).style.display="none";
    },3000);
  }

  onAdvertiseClick(urlSource:string){
    window.open(urlSource, '_blank');
  }

  toggleProfileView() {
    this.isUserProfileView = !this.isUserProfileView;
  }

  addTag(tag: string) {
    this.tags.push(tag);
    this.cd.detectChanges();
  }
}

