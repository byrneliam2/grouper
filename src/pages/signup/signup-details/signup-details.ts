import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { SignupPicturePage } from '../signup-picture/signup-picture';
import { ResourcesProvider } from '../../../providers/business/resources/resources';
import { EditorProvider } from '../../../providers/business/editor/editor';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-signup-details',
  templateUrl: 'signup-details.html',
})
export class SignupDetailsPage {

  formControl: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
    public resources: ResourcesProvider, public edit: EditorProvider, public alert: AlertProvider) {
    this.formControl = this.edit.getGroupFormBuilder('name', 'intro', 'bio', '', '', '');
  }

  nextPage() {
    if (this.formControl.valid) {
      this.navCtrl.push(SignupPicturePage, {
        name: this.formControl.get('name').value,
        intro: this.formControl.get('intro').value,
        bio: this.formControl.get('bio').value
      });
    } else this.alert.doToast("There is an issue with some of the values you have entered!");
  }

}
