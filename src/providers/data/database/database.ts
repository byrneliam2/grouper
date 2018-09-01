import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AzureAdProvider } from '../azure-ad/azure-ad';
import { Observable } from 'rxjs';

@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient, private azure: AzureAdProvider) { }

  // ========== User Information ========== \\

  /**
   * Return static information about a given user.
   */
  getUser(id: string) {
    let usersRef = firebase.database().ref('users');
    return usersRef.child(id).once('value');
  }

  /**
   * Return static information about the current user.
   */
  getCurrentUser() {
    return this.getUser(this.azure.getUserID());
  }

  /**
   * Create user method used for signup.
   */
  createUser(name, intro, bio, imageURL) {
    firebase.database().ref(`users/${this.azure.getUserID()}/`).set({
      name: name,
      intro: intro,
      bio: bio,
      image: imageURL
    });
  }

  /**
   * Save information about the current user.
   */
  updateUser(id, name, intro, bio, imageURL, fav): void {
    firebase.database().ref(`users/${id}/`).set({
      name: name,
      intro: intro,
      bio: bio,
      image: imageURL,
      fav: fav
    });
  }

  /**
   * Save information about the current user.
   */
  updateCurrentUser(name, intro, bio, imageURL, fav): void {
    this.updateUser(this.azure.getUserID(), name, intro, bio, imageURL, fav);
  }

  removeCurrentUser(): void {
    this.getAllConstantGroups().subscribe(data => {
      console.log(0)
      data.forEach(group => {
        if (this.isGroupOwner(group.owner)) {
          this.removeGroup(group.key);
        }
        else if (this.isInGroup(group.members)) {
          this.removeAsGroupMember(group.key);
        }
        else if (this.hasRejected(group.rejects)) {
          this.unrejectGroup(group.key);
        }
      });
      console.log(1)
      firebase.database().ref(`users/${this.azure.getUserID()}/`).remove();
      console.log(2)
    });
  }

  // ========== Group Information ========== \\

  /**
   * Return static information about a group.
   */
  getGroup(id) {
    let groupsRef = firebase.database().ref('groups');
    return groupsRef.child(id).once('value');
  }

  /**
   * Return real-time information about all groups. The given function
   * is a callback to be executed on any change.
   * @param f callback function
   */
  getAllGroups(f) {
    return firebase.database().ref('groups').orderByKey().on('value', f);
  }

  /**
   * Return constant information about all groups. The given function
   * is a callback to be executed on any change.
   * @param f callback function
   */
  getAllConstantGroups(): Observable<any> {
    return new Observable(observer => {
      let groups: any = [];
      firebase.database().ref('groups').orderByKey().once('value', (items: any) => {
        items.forEach((item) => {
          groups.push({
            key: item.key,
            owner: item.val().owner,
            name: item.val().name,
            description: item.val().description,
            category: item.val().category,
            image: item.val().image,
            members: item.val().members,
            rejects: item.val().rejects, 
            posts: item.val().posts
          });
        });

        observer.next(groups);
        observer.complete();
      });
    });
  }


  /**
   * Create a new group with a fresh ID and this user as the owner.
   * @param name name of the group
   * @param category category of the group
   * @param description group description
   * @returns the ID given to this group
   */
  createGroup(name, category, description, image) {
    firebase.database().ref('groups').push({
      name: name,
      category: category,
      description: description,
      image: image,
      members: [this.azure.getUserID()],
      rejects: [],
      owner: this.azure.getUserID(),
      posts: []
    });
  }

  /**
   * Save descriptive information about a given group. Users and owner
   * fields are not modified with this function.
   * @param id group ID
   */
  updateGroup(id, name, category, description, image) {
    // must be update() to avoid overwriting users
    firebase.database().ref(`groups/${id}/`).update({
      name: name,
      category: category,
      description: description,
      image: image
    });
  }

  /**
   * Remove a group from the database. This function is unguarded so
   * any verification must take place before the call to here.
   * This will also remove the group from a members favourites.
   * @param id group ID
   */
  removeGroup(id) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let members = r.val().members;
      members.forEach(member => {
        this.getUser(member).then(data => {
          if (data.val().fav == id)
            this.updateUser(member, data.val().name, data.val().intro,
              data.val().bio, data.val().image, null);
        });
      });
    });
    firebase.database().ref(`groups/${id}/`).remove();
  }

  /**
   * Create a post within a group.
   * @param id ID of group
   * @param post post content (text only)
   */
  createPost(id, post) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let posts = r.val().posts || [];
      posts.push({
        content: post,
        stamp: new Date().toLocaleString()
      });
      firebase.database().ref(`groups/${id}/`).update({
        posts: posts
      });
    });
  }

  /**
   * Return real-time information about all group posts from a given group.
   * @param id ID of group
   * @param f callback
   */
  getPosts(id, f) {
    return firebase.database().ref(`groups/${id}/posts`).on('value', f);
  }

  /**
   * Update a post within a group. Note the timestamp is not affected.
   * @param id ID of group
   * @param index post index in list
   */
  updatePost(id, post, index) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let posts = r.val().posts;
      posts[index].content = post;
      firebase.database().ref(`groups/${id}/`).update({
        posts: posts
      });
    });
  }

  /**
   * Remove a post within a group.
   * @param id ID of group
   * @param index post index in list
   */
  removePost(id, index) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let posts = r.val().posts;
      posts.splice(index, 1);
      firebase.database().ref(`groups/${id}/`).update({
        posts: posts
      });
    });
  }

  // ========== Group Members ========== \\

  /**
   * Verify whether the current user is the owner of a group.
   */
  isGroupOwner(ownerId) {
    return ownerId == this.azure.getUserID();
  }

  /**
   * Verify whether the current user is a member of a group, given the list
   * of its members.
   * @param members group members
   */
  isInGroup(members) {
    return members.includes(this.azure.getUserID());
  }

  /**
   * Verify whether the current user has blocked seeing a group, given the list
   * of its rejected members.
   * @param rejects rejected members
   */
  hasRejected(rejects) {
    if (!rejects) return;
    return rejects.includes(this.azure.getUserID());
  }

  /**
   * Add the current user to the given group iff they are not a 
   * member already.
   * @param id group ID
   */
  addAsGroupMember(id) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let userList = r.val().members;
      if (userList.includes(this.azure.getUserID())) return;
      userList.push(this.azure.getUserID());
      firebase.database().ref(`groups/${id}/`).update({
        members: userList
      });
    });
  }

  /**
   * Remove the current user from the given group.
   * @param id group ID
   */
  removeAsGroupMember(id) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let userList = r.val().members;
      if (!userList.includes(this.azure.getUserID())) return;
      userList.splice(userList.indexOf(this.azure.getUserID()), 1);
      firebase.database().ref(`groups/${id}/`).update({
        members: userList
      });
    });
  }

  /**
   * Remove the current group from displaying to the user, after they reject a
   * group on the main page.
   * @param id group ID
   */
  rejectGroup(id) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let rejectList = r.val().rejects || [];
      if (rejectList.includes(this.azure.getUserID())) return;
      rejectList.push(this.azure.getUserID());
      firebase.database().ref(`groups/${id}/`).update({
        rejects: rejectList
      });
    });
  }

  /**
    * Re-add the current group from displaying to the user, removing the rejection Status
    * @param id group ID
    */
  unrejectGroup(id) {
    let groupInfo = this.getGroup(id);
    groupInfo.then(r => {
      let rejectList = r.val().rejects || [];
      if (!rejectList.includes(this.azure.getUserID())) return;
      rejectList.splice(rejectList.indexOf(this.azure.getUserID()), 1);
      firebase.database().ref(`groups/${id}/`).update({
        rejects: rejectList
      });
    });
  }
}