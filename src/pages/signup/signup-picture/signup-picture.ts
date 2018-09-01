import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupConfirmPage } from '../signup-confirm/signup-confirm';
import { ImageProvider } from '../../../providers/data/image/image';

@Component({
  selector: 'page-signup-picture',
  templateUrl: 'signup-picture.html',
})
export class SignupPicturePage {
  name: string;
  intro: string;
  bio: string;
  imageURL: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imgProvider: ImageProvider) {
    this.name = this.navParams.get('name');
    this.intro = this.navParams.get('intro');
    this.bio = this.navParams.get('bio');
    this.imageURL = 'assets/imgs/profile.png';
  }

  uploadEvent(event: Event) {
    let self = this;

    this.imgProvider.open();
    this.imgProvider.uploadPicture(event.target['files'].item(0), 'users').then((snapshot: any) => {
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        self.imageURL = downloadURL;
      });
      self.imgProvider.close();
    });
  }

  nextPage() {
    this.navCtrl.push(SignupConfirmPage, {
      name: this.name,
      intro: this.intro,
      bio: this.bio,
      imageURL: this.imageURL
    });
    console.log(this.imageURL)
  }
}
