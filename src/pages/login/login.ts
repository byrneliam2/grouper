import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AzureAdProvider } from '../../providers/data/azure-ad/azure-ad';
import { LoadingPage } from '../loading/loading';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(private navCtrl: NavController, private azure: AzureAdProvider) {
    this.azure.initiateProvider();
  }

  ionViewDidLoad() {
    // Handle callback if this is a redirect from Azure
    this.azure.handleCallback();

    // If already Authenticated, Switch to Homepage.
    if (this.azure.isAuthenticated()) {
      this.navCtrl.setRoot(LoadingPage);
    }
  }
}
