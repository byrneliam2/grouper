import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {

  id: any;
  name: string;
  intro: string;
  bio: string;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.intro = this.navParams.get('intro');
    this.bio = this.navParams.get('bio');
    this.image = this.navParams.get('image');
  }

}
