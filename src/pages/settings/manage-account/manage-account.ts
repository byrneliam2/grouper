import { Component } from '@angular/core';
import { AlertController, App } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { LoadingPage } from '../../loading/loading';
import { AzureAdProvider } from '../../../providers/data/azure-ad/azure-ad';

@Component({
  selector: 'page-manage-account',
  templateUrl: 'manage-account.html',
})
export class ManageAccountPage {

  constructor(private app: App, private alertCtrl: AlertController, private database: DatabaseProvider, private azure: AzureAdProvider) {
  }

  deleteAccount() {
    const alert = this.alertCtrl.create({
      title: "Confirm Delete Account?",
      message: "This action is permanent and cannot be reverted",
      buttons: [
        {
          text: "Nope, my bad"
        },
        {
          text: "Yep, do it",
          handler: () => {
            this.app.getRootNav().setRoot(LoadingPage, { load: true });

            setTimeout(() => {
              this.database.removeCurrentUser();
              setTimeout(() => { this.azure.logout(); }, 3000);
            }, 1000);
          }
        }
      ]
    });
    alert.present();
  }
}
