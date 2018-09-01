import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-signup-confirm',
  templateUrl: 'signup-confirm.html',
})
export class SignupConfirmPage {
  name: string;
  intro: string;
  bio: string;
  imageURL: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public database: DatabaseProvider) {
      this.name = this.navParams.get('name');
      this.intro = this.navParams.get('intro');
      this.bio = this.navParams.get('bio');
      this.imageURL = this.navParams.get('imageURL');
    }

  confirmUser() {
    this.database.createUser(
      this.name,
      this.intro,
      this.bio,
      this.imageURL
    );
    this.navCtrl.setRoot(TabsPage);
  }
}
