import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Slides, NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/data/database/database';

import { SettingsMainPage } from '../settings/settings-main/settings-main';
import { GroupPage } from '../groups/group/group';
import { AlertProvider } from '../../providers/business/alert/alert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  slide_data: any[];
  hideButtonText = "Hide";
  joinButtonText = "Join";

  toSettingsPage = SettingsMainPage;

  constructor(public navCtrl: NavController, public change: ChangeDetectorRef, 
    public database: DatabaseProvider, public http: Http, public alert: AlertProvider) {
    setTimeout(() => {
      this.hideButtonText = null;
      this.joinButtonText = null;
    }, 3000);
  }

  swipeRight() {
    this.slides.slideNext();
  }

  swipeLeft() {
    this.slides.slidePrev();
  }

  reject() {
    const currentGroup = this.slide_data[(this.slides.getActiveIndex())];
    if (!currentGroup) return;
    if (this.slides.getActiveIndex() == (this.slide_data.length - 1)) this.swipeLeft();
    this.database.rejectGroup(currentGroup.key);
    this.alert.doToast(`You have blocked the group "${currentGroup.val().name}"!`);
  }

  register() {
    const currentGroup = this.slide_data[(this.slides.getActiveIndex())];
    if (!currentGroup) return;
    if (this.slides.getActiveIndex() == (this.slide_data.length - 1)) this.swipeLeft();
    this.database.addAsGroupMember(currentGroup.key);
    this.alert.doToast(`You were added to group "${currentGroup.val().name}"!`);
  }

  goToGroupProfile() {
    const currentGroup = this.slide_data[(this.slides.getActiveIndex())];
    if (!currentGroup) return;
    this.navCtrl.push(GroupPage, {
      id: currentGroup.key,
      name: currentGroup.val().name,
      category: currentGroup.val().category,
      description: currentGroup.val().description,
      members: currentGroup.val().members,
      image: currentGroup.val().image
    });
    this.slides.slideTo(0);
  }

  /* ======================================================================== */

  homeToast() {
    let url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    this.http.get(url).pipe(map(res => res.json())).subscribe(data => {
      let html = data[0].content;
      let div = document.createElement("div");
      div.innerHTML = html;
      let text = div.textContent || div.innerText || "";
      this.alert.doToast(`"${text}" - ${data[0].title}`);
    });
  }

  /* ======================================================================== */

  ionViewDidLoad() {
    // get all group info and attach a listener so that it is continuously updated on changes
    this.database.getAllGroups((snap) => {
      this.slide_data = [];
      snap.forEach((r) => {
        if (!(this.database.isInGroup(r.val().members)))
          if (!(this.database.hasRejected(r.val().rejects)))
            this.slide_data.push(r);
      });
      this.change.markForCheck(); // manually trigger change event as nothing else will

      // LINE 94 WAS .detectChanges()
      // FIXES INCLUDE
      // if (!this.change['destroyed']) {}
      // ngOnDestroy and detach change ref
    });

  }

}
