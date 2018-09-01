import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../../providers/data/database/database';

import { PublicProfilePage } from '../../profile/public-profile/public-profile';
import { PostPage } from '../post/post';
import { AlertProvider } from '../../../providers/business/alert/alert';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  id: any;
  name: string;
  category: string;
  description: string;
  image: string;
  members: any[] = [];
  posts: any[];
  isOwner: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public database: DatabaseProvider, public alert: AlertProvider) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.category = this.navParams.get('category');
    this.description = this.navParams.get('description');
    this.image = this.navParams.get('image');
    this.isOwner = this.navParams.get('isOwner');

    // load members from database
    this.navParams.get('members').forEach(member => {
      this.database.getUser(member).then(data => {
        this.members.push({
          id: member,
          name: data.val().name,
          intro: data.val().intro,
          bio: data.val().bio,
          image: data.val().image
        });
      });
    });
  }

  register() {
    this.database.addAsGroupMember(this.id);
    this.alert.doToast(`You were added to group "${this.name}"!`);
    this.navCtrl.pop();
  }

  goToPublicProfile(member) {
    this.navCtrl.push(PublicProfilePage, {
      name: member.name,
      intro: member.intro,
      bio: member.bio,
      image: member.image
    });
  }

  createPost() {
    this.navCtrl.push(PostPage, {
      id: this.id,
      posts: this.posts
    });
  }

  editPost(index) {
    this.navCtrl.push(PostPage, {
      id: this.id,
      posts: this.posts,
      oldPost: this.posts[index].content,
      index: index
    });
  }

  removePost(index) {
    const alert = this.alertCtrl.create({
      title: "Confirm delete post?",
      message: "Sure you wanna delete?",
      buttons: [
        {
          text: "Nah"
        },
        {
          text: "Yeah",
          handler: () => {
            this.database.removePost(this.id, index);
            this.alert.doToast("Post removed!");
          }
        }
      ]
    });
    alert.present();
  }

  isInGroup() {
    return this.database.isInGroup(this.navParams.get('members'));
  }

  ionViewDidEnter() {
    // All other data apart from posts is static (dependent from parameters
    // provided from last page. This is so that the user does not get real-time
    // updates on data that should remain the same throughout. As an example, a
    // user may become confused if the description of the group changes while
    // they are reading it.
    this.database.getPosts(this.navParams.get('id'), (r) => {
      this.posts = r.val();
    });
  }

}
