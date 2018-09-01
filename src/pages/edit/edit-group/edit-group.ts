import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

import { DatabaseProvider } from '../../../providers/data/database/database';
import { ImageProvider } from '../../../providers/data/image/image';
import { ResourcesProvider } from '../../../providers/business/resources/resources';
import { AlertProvider } from '../../../providers/business/alert/alert';
import { EditorProvider } from '../../../providers/business/editor/editor';

@Component({
  selector: 'page-edit-group',
  templateUrl: 'edit-group.html',
})
export class EditGroupPage {

  id: any;
  imageURL: string;

  formControl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public database: DatabaseProvider, public formBuilder: FormBuilder, public imgProvider: ImageProvider,
    public resources: ResourcesProvider, public alert: AlertProvider, public edit: EditorProvider) {
    this.id = this.navParams.get('id');
    let oldName = this.navParams.get('name');
    let oldCtg = this.navParams.get('category');
    let oldDesc = this.navParams.get('description');
    this.imageURL = this.navParams.get('image');

    this.formControl = this.edit.getGroupFormBuilder('name', 'category', 'description', oldName, oldCtg, oldDesc);
  }

  save() {
    if (this.formControl.valid) {
      this.database.updateGroup(
        this.id,
        this.formControl.get('name').value,
        this.formControl.get('category').value,
        this.formControl.get('description').value,
        this.imageURL
      );
      this.navCtrl.pop();
      this.alert.doToast("Updates saved!");
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
