import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { DatabaseProvider } from '../../../providers/data/database/database';
import { ImageProvider } from '../../../providers/data/image/image';
import { ResourcesProvider } from '../../../providers/business/resources/resources';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  image: string;
  favGroup: any;

  groups = [];

  formControl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public database: DatabaseProvider, 
    public imgProvider: ImageProvider, public resources: ResourcesProvider, 
    public alert: AlertProvider) {
    let oldName = this.navParams.get('name');
    let oldIntro = this.navParams.get('intro');
    let oldBio = this.navParams.get('bio');
    this.favGroup = this.navParams.get('favGroup');
    this.image = this.navParams.get('image');

    let favName = '- - -';
    if (this.favGroup) favName = this.favGroup.val().name;

    this.formControl = this.formBuilder.group({
      name: [oldName, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_NAME), Validators.pattern(/^[a-z ,.'-]+$/i), Validators.required])],
      intro: [oldIntro, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_SUB)])],
      bio: [oldBio, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_DESC)])],
      fav: [favName]
    });

    this.database.getAllGroups((snap) => {
      snap.forEach((r) => {
        if (this.database.isInGroup(r.val().members)) {
          this.groups.push(r);
        }
      });
    });
  }

  save() {
    if (this.formControl.valid) {
      let favKey = null;
      if (this.favGroup) favKey = this.favGroup.key;

      this.database.updateCurrentUser(
        this.formControl.get('name').value,
        this.formControl.get('intro').value,
        this.formControl.get('bio').value,
        this.image,
        favKey
      );
      this.navCtrl.pop();
      this.alert.doToast("Updates saved!");
    }
    else this.alert.doToast("There is an issue with some of the values you have entered!");
  }

  uploadEvent(event: Event) {
    let self = this;

    this.imgProvider.open();
    this.imgProvider.uploadPicture(event.target['files'].item(0), 'users').then((snapshot: any) => {
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        self.image = downloadURL;
      });
      self.imgProvider.close();
    });
  }

}
