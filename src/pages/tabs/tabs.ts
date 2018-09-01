import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { GroupsListPage } from '../groups/groups-list/groups-list';
import { PrivateProfilePage } from '../profile/private-profile/private-profile';

import { AzureAdProvider } from '../../providers/data/azure-ad/azure-ad';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GroupsListPage;
  tab3Root = PrivateProfilePage;
  tab4Root = null;

  constructor(public alertCtrl: AlertController, private azure: AzureAdProvider) {}

  refresh() {
    window.location.reload();
  }

  logout() {
    const alert = this.alertCtrl.create({
      title: "Logout?",
      message: "Whoa there! Are you sure you want to logout?",
      buttons: [
        {
          text: "Nuh uh"
        },
        {
          text: "Yep, I'm sure",
          handler: () => {
            this.azure.logout();
          }
        }
      ]
    });
    alert.present();
  }
}
