import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../../home/home';
import { SettingsMainPage } from '../../settings/settings-main/settings-main';

import { GroupPage } from '../group/group';
import { CreateGroupPage } from '../create-group/create-group';
import { EditGroupPage } from '../../edit/edit-group/edit-group';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-groups-list',
  templateUrl: 'groups-list.html',
})
export class GroupsListPage {
  group_data: any[];

  toSettingsPage = SettingsMainPage;
  toCreateGroupPage = CreateGroupPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public database: DatabaseProvider, public alert: AlertProvider) {
  }

  editGroup(index) {
    let currentGroup = this.group_data[index];
    this.navCtrl.push(EditGroupPage, {
      id: currentGroup.key,
      name: currentGroup.val().name,
      category: currentGroup.val().category,
      description: currentGroup.val().description,
      image: currentGroup.val().image
    });
  }

  remove(index) {
    // get some info about the group before it gets potentially deleted
    let name = "";
    this.database.getGroup(this.group_data[index].key).then((r) => {
      name = r.val().name;
    });

    if (this.isOwner(index)) {
      const alert = this.alertCtrl.create({
        title: "Confirm delete group?",
        message: "You own this group and thus have been granted \
        the power to delete for all eternity. Are you sure?",
        buttons: [
          {
            text: "Nope, my bad"
          },
          {
            text: "Yep, do it",
            handler: () => {
              this.database.removeGroup(this.group_data[index].key);
              this.alert.doToast(`Group "${name}" removed!`);
            }
          }
        ]
      });
      alert.present();
    } else {
      const alert = this.alertCtrl.create({
        title: "Confirm leave group?",
        message: "Looks like you want to bail from this group. Are you sure?",
        buttons: [
          {
            text: "Nope, my bad"
          },
          {
            text: "Yep, do it",
            handler: () => {
              this.database.removeAsGroupMember(this.group_data[index].key);
              this.alert.doToast(`Successfully left "${name}"!`);
            }
          }
        ]
      });
      alert.present();
    }
  }

  goToGroupProfile(index) {
    let currentGroup = this.group_data[index];
    this.navCtrl.push(GroupPage, {
      id: currentGroup.key,
      name: currentGroup.val().name,
      category: currentGroup.val().category,
      description: currentGroup.val().description,
      members: currentGroup.val().members,
      image: currentGroup.val().image,
      isOwner: this.isOwner(index)
    });
  }

  /**
   * Wrapper for the Firebase version of the owner method. Used in the template.
   */
  isOwner(index) {
    return this.database.isGroupOwner(this.group_data[index].val().owner);
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    this.database.getAllGroups((snap) => {
      this.group_data = [];
      snap.forEach((r) => {
        if (this.database.isInGroup(r.val().members)) {
          this.group_data.push(r);
        }
      });
      // no change detector here as there must be an initial event to navigate to this page,
      // triggering an update along the way
    });
  }

}
