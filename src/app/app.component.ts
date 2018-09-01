import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AzureAdProvider } from '../providers/data/azure-ad/azure-ad';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';
import { FirebaseConfig } from '../providers/data/firebase-config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private azure: AzureAdProvider, private config: FirebaseConfig) {
    platform.ready().then(() => {
      if (this.azure.isAuthenticated()) this.rootPage = HomePage;
      else this.rootPage = LoginPage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(this.config.firebaseConfig);
  }
}
