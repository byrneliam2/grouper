import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';

import { GroupsListPage } from '../groups-list/groups-list';
import { ImageProvider } from '../../../providers/data/image/image';
import { ResourcesProvider } from '../../../providers/business/resources/resources';
import { EditorProvider } from '../../../providers/business/editor/editor';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  imageURL: string;
  formControl: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    public database: DatabaseProvider, public formBuilder: FormBuilder,
    public imgProvider: ImageProvider, public resources: ResourcesProvider,
    public edit: EditorProvider, public alert: AlertProvider) {
    this.imageURL = 'assets/imgs/icon.png';

    this.formControl = this.edit.getGroupFormBuilder('name', 'category', 'description', '', '', '');
  }

  create() {
    if (this.formControl.valid) {
      this.database.createGroup(
        this.formControl.get('name').value,
        this.formControl.get('category').value,
        this.formControl.get('description').value,
        this.imageURL
      );
      this.navCtrl.setRoot(GroupsListPage);
      this.alert.doToast(`Group "${this.formControl.get('name').value}" created!`);
    }
    else this.alert.doToast("There is an issue with some of the values you have entered!");
  }

  uploadEvent(event: Event) {
    let self = this;

    this.imgProvider.open();
    this.imgProvider.uploadPicture(event.target['files'].item(0), 'groups').then((snapshot: any) => {
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        self.imageURL = downloadURL;
      });
      self.imgProvider.close();
    });
  }

}
