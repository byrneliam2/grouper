import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../../home/home';
import { SettingsMainPage } from '../../settings/settings-main/settings-main';
import { EditProfilePage } from '../../edit/edit-profile/edit-profile';
import { GroupPage } from '../../groups/group/group';

import { DatabaseProvider } from '../../../providers/data/database/database';

@Component({
  selector: 'page-private-profile',
  templateUrl: 'private-profile.html',
})
export class PrivateProfilePage {

  name: string;
  intro: string;
  bio: string;
  image: string;
  favGroup: any;

  toSettingsPage = SettingsMainPage;

  constructor(public navCtrl: NavController, public database: DatabaseProvider) {
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage, {
      name: this.name,
      intro: this.intro,
      bio: this.bio,
      image: this.image,
      favGroup: this.favGroup
    });
  }

  goToGroupProfile() {
    this.navCtrl.push(GroupPage, {
      id: this.favGroup.key,
      name: this.favGroup.val().name,
      category: this.favGroup.val().category,
      description: this.favGroup.val().description,
      members: this.favGroup.val().members,
      image: this.favGroup.val().image,
      isOwner: this.database.isGroupOwner(this.favGroup.val().owner)
    });
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidEnter() {
    this.database.getCurrentUser().then((r) => {
      this.name = r.val().name;
      this.intro = r.val().intro;
      this.bio = r.val().bio;
      this.image = r.val().image;

      if (r.val().fav) {
        this.database.getGroup(r.val().fav).then((g) => {
          this.favGroup = this.database.isInGroup(g.val().members) ? g : null;
        });
      } else {
        this.favGroup = null;
      }
    });
  }

}
