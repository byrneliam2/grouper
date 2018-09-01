import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { ResourcesProvider } from '../../../providers/business/resources/resources';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  id: any;
  oldPost: string;
  index: number;

  formControl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder, public database: DatabaseProvider, 
    public resources: ResourcesProvider, public alert: AlertProvider) {
    this.id = this.navParams.get('id');
    this.oldPost = this.navParams.get('oldPost') || "";
    this.index = this.navParams.get('index');

    this.formControl = this.formBuilder.group({
      content: [this.oldPost, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_POST), Validators.required])]
    });
  }

  save() {
    if (this.formControl.valid) {
      if (this.oldPost != "") {
        this.database.updatePost(
          this.id,
          this.formControl.get('content').value,
          this.index
        );
        this.navCtrl.pop();
        this.alert.doToast("Post updated!");
      } else {
        this.database.createPost(
          this.id,
          this.formControl.get('content').value
        );
        this.navCtrl.pop();
        this.alert.doToast("Post created!");
      }
    }
    else this.alert.doToast("Can't have an empty post!");
  }

}
