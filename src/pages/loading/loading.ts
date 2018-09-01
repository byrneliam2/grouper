import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupDetailsPage } from '../signup/signup-details/signup-details';
import { DatabaseProvider } from '../../providers/data/database/database';
import { Http } from '@angular/http';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {
  header: string;
  message: string;

  constructor(navCtrl: NavController, navParams: NavParams, database: DatabaseProvider, public http: Http) {
    if (!navParams.get('load')) {
      this.header = "Loading Grouper...";

      this.http.get('assets/text/loading.json').subscribe(r => {
        let data: string[] = r.json();
        this.message = data[Math.floor(Math.random() * data.length)];
      });

      database.getCurrentUser().then(data => {
        if (!data.exists()) {
          navCtrl.setRoot(SignupDetailsPage);
        }
        else navCtrl.setRoot(TabsPage);
      });
    }
    else {
      this.header = "Deleting Account...";
      this.message = "We miss you already!"
    }
  }
}
