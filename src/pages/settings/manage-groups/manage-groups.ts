import { Component } from '@angular/core';
import { AlertController, App } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { LoadingPage } from '../../loading/loading';

@Component({
  selector: 'page-manage-groups',
  templateUrl: 'manage-groups.html',
})
export class ManageGroupsPage {

  options = [
    { header: "Delete Owned Groups", description: "This action will delete all Groups you have created", button: "DELETE GROUPS", action: "delete" },
    { header: "Leave Joined Groups", description: "This action will remove you from all Groups that you do not own", button: "LEAVE GROUPS", action: "leave" },
    { header: "Reset Rejected Groups", description: "This action will allow you to see groups you have rejected", button: "RESET REJECTS", action: "reset" }
  ]


  constructor(private app: App,  private database: DatabaseProvider, private alertCtrl: AlertController) {
  }

  handleAction(action: string) {
    const alert = this.alertCtrl.create({
      title: "Are you Sure?",
      message: "This action is permanent and cannot be reverted",
      buttons: [
        { text: "Nope, my bad" },
        {
          text: "Yep, do it",
          handler: () => {
            this.app.getRootNav().setRoot(LoadingPage);
            if (action == 'delete') this.deleteGroups();
            else if (action == 'leave') this.leaveGroups();
            else if (action == 'reset') this.resetRejects();
          }
        }
      ]
    });
    alert.present();

  }

  private deleteGroups() {
    this.database.getAllConstantGroups().subscribe(data => {
      data.forEach((group) => {
        if (this.database.isGroupOwner(group.owner))
          this.database.removeGroup(group.key);
      });
    });
  }

  private leaveGroups() {
    this.database.getAllConstantGroups().subscribe(data => {
      data.forEach((group) => {
        if (!this.database.isGroupOwner(group.owner) && this.database.isInGroup(group.members))
          this.database.removeAsGroupMember(group.key);
      });
    });
  }

  private resetRejects() {
    this.database.getAllConstantGroups().subscribe(data => {
      data.forEach((group) => {
        if (this.database.hasRejected(group.rejects))
          this.database.unrejectGroup(group.key);
      });
    });
  }

}
