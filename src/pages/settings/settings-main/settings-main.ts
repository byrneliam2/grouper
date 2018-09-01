import { Component } from '@angular/core';
import { DatabaseProvider } from '../../../providers/data/database/database';
import { ManageAccountPage } from '../manage-account/manage-account';
import { ManageGroupsPage } from '../manage-groups/manage-groups';

@Component({
  selector: 'page-settings-main',
  templateUrl: 'settings-main.html',
})
export class SettingsMainPage {

  name: string;
  groups: any = [];

  constructor(public database: DatabaseProvider) { }

  options = [
    { header: "Manage Account", description: "Manage your Grouper Account!", nav: ManageAccountPage },
    { header: "Manage Groups", description: "Manage Groups you have Joined / Rejected!", nav: ManageGroupsPage }
  ]

}
