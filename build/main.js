webpackJsonp([0],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups_list_groups_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_private_profile_private_profile__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_azure_ad_azure_ad__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(alertCtrl, azure) {
        this.alertCtrl = alertCtrl;
        this.azure = azure;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__groups_groups_list_groups_list__["a" /* GroupsListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__profile_private_profile_private_profile__["a" /* PrivateProfilePage */];
        this.tab4Root = null;
    }
    TabsPage.prototype.refresh = function () {
        window.location.reload();
    };
    TabsPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Logout?",
            message: "Whoa there! Are you sure you want to logout?",
            buttons: [
                {
                    text: "Nuh uh"
                },
                {
                    text: "Yep, I'm sure",
                    handler: function () {
                        _this.azure.logout();
                    }
                }
            ]
        });
        alert.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabIcon="exit" (ionSelect)="logout()"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_data_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_main_settings_main__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_group__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_group_create_group__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_group_edit_group__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupsListPage = /** @class */ (function () {
    function GroupsListPage(navCtrl, alertCtrl, database, alert) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.alert = alert;
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings_main_settings_main__["a" /* SettingsMainPage */];
        this.toCreateGroupPage = __WEBPACK_IMPORTED_MODULE_5__create_group_create_group__["a" /* CreateGroupPage */];
    }
    GroupsListPage.prototype.editGroup = function (index) {
        var currentGroup = this.group_data[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_edit_group_edit_group__["a" /* EditGroupPage */], {
            id: currentGroup.key,
            name: currentGroup.val().name,
            category: currentGroup.val().category,
            description: currentGroup.val().description,
            image: currentGroup.val().image
        });
    };
    GroupsListPage.prototype.remove = function (index) {
        var _this = this;
        // get some info about the group before it gets potentially deleted
        var name = "";
        this.database.getGroup(this.group_data[index].key).then(function (r) {
            name = r.val().name;
        });
        if (this.isOwner(index)) {
            var alert_1 = this.alertCtrl.create({
                title: "Confirm delete group?",
                message: "You own this group and thus have been granted \
        the power to delete for all eternity. Are you sure?",
                buttons: [
                    {
                        text: "Nope, my bad"
                    },
                    {
                        text: "Yep, do it",
                        handler: function () {
                            _this.database.removeGroup(_this.group_data[index].key);
                            _this.alert.doToast("Group \"" + name + "\" removed!");
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Confirm leave group?",
                message: "Looks like you want to bail from this group. Are you sure?",
                buttons: [
                    {
                        text: "Nope, my bad"
                    },
                    {
                        text: "Yep, do it",
                        handler: function () {
                            _this.database.removeAsGroupMember(_this.group_data[index].key);
                            _this.alert.doToast("Successfully left \"" + name + "\"!");
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    GroupsListPage.prototype.goToGroupProfile = function (index) {
        var currentGroup = this.group_data[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__group_group__["a" /* GroupPage */], {
            id: currentGroup.key,
            name: currentGroup.val().name,
            category: currentGroup.val().category,
            description: currentGroup.val().description,
            members: currentGroup.val().members,
            image: currentGroup.val().image,
            isOwner: this.isOwner(index)
        });
    };
    /**
     * Wrapper for the Firebase version of the owner method. Used in the template.
     */
    GroupsListPage.prototype.isOwner = function (index) {
        return this.database.isGroupOwner(this.group_data[index].val().owner);
    };
    GroupsListPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    GroupsListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.database.getAllGroups(function (snap) {
            _this.group_data = [];
            snap.forEach(function (r) {
                if (_this.database.isInGroup(r.val().members)) {
                    _this.group_data.push(r);
                }
            });
            // no change detector here as there must be an initial event to navigate to this page,
            // triggering an update along the way
        });
    };
    GroupsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-groups-list',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\groups\groups-list\groups-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="goHome()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Groups</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list no-lines>\n\n\n\n    <ion-item *ngIf="group_data == undefined">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <ion-spinner></ion-spinner>\n\n            <p id="loading-text">Retrieving your groups...</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item *ngFor="let group_obj of group_data; let i = index">\n\n      <ion-avatar item-start>\n\n        <img src="{{group_obj.val().image}}" class="group-img">\n\n        <ion-badge>{{group_obj.val().members.length}}</ion-badge>\n\n      </ion-avatar>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col class="overflow" (click)="goToGroupProfile(i)">\n\n            <h2>{{group_obj.val().name}}</h2>\n\n            <p>{{group_obj.val().category}}</p>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-buttons right>\n\n              <button ion-button icon-only clear *ngIf="isOwner(i)" (click)="editGroup(i)">\n\n                <ion-icon name="create"></ion-icon>\n\n              </button>\n\n              <button ion-button icon-only clear (click)="remove(i)">\n\n                <ion-icon name="close"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right class="padded-fab">\n\n    <button ion-fab [navPush]="toCreateGroupPage">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\groups\groups-list\groups-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], GroupsListPage);
    return GroupsListPage;
}());

//# sourceMappingURL=groups-list.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, azure) {
        this.http = http;
        this.azure = azure;
    }
    // ========== User Information ========== \\
    /**
     * Return static information about a given user.
     */
    DatabaseProvider.prototype.getUser = function (id) {
        var usersRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('users');
        return usersRef.child(id).once('value');
    };
    /**
     * Return static information about the current user.
     */
    DatabaseProvider.prototype.getCurrentUser = function () {
        return this.getUser(this.azure.getUserID());
    };
    /**
     * Create user method used for signup.
     */
    DatabaseProvider.prototype.createUser = function (name, intro, bio, imageURL) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("users/" + this.azure.getUserID() + "/").set({
            name: name,
            intro: intro,
            bio: bio,
            image: imageURL
        });
    };
    /**
     * Save information about the current user.
     */
    DatabaseProvider.prototype.updateUser = function (id, name, intro, bio, imageURL, fav) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("users/" + id + "/").set({
            name: name,
            intro: intro,
            bio: bio,
            image: imageURL,
            fav: fav
        });
    };
    /**
     * Save information about the current user.
     */
    DatabaseProvider.prototype.updateCurrentUser = function (name, intro, bio, imageURL, fav) {
        this.updateUser(this.azure.getUserID(), name, intro, bio, imageURL, fav);
    };
    DatabaseProvider.prototype.removeCurrentUser = function () {
        var _this = this;
        this.getAllConstantGroups().subscribe(function (data) {
            console.log(0);
            data.forEach(function (group) {
                if (_this.isGroupOwner(group.owner)) {
                    _this.removeGroup(group.key);
                }
                else if (_this.isInGroup(group.members)) {
                    _this.removeAsGroupMember(group.key);
                }
                else if (_this.hasRejected(group.rejects)) {
                    _this.unrejectGroup(group.key);
                }
            });
            console.log(1);
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("users/" + _this.azure.getUserID() + "/").remove();
            console.log(2);
        });
    };
    // ========== Group Information ========== \\
    /**
     * Return static information about a group.
     */
    DatabaseProvider.prototype.getGroup = function (id) {
        var groupsRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups');
        return groupsRef.child(id).once('value');
    };
    /**
     * Return real-time information about all groups. The given function
     * is a callback to be executed on any change.
     * @param f callback function
     */
    DatabaseProvider.prototype.getAllGroups = function (f) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().on('value', f);
    };
    /**
     * Return constant information about all groups. The given function
     * is a callback to be executed on any change.
     * @param f callback function
     */
    DatabaseProvider.prototype.getAllConstantGroups = function () {
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            var groups = [];
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().once('value', function (items) {
                items.forEach(function (item) {
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
    };
    /**
     * Create a new group with a fresh ID and this user as the owner.
     * @param name name of the group
     * @param category category of the group
     * @param description group description
     * @returns the ID given to this group
     */
    DatabaseProvider.prototype.createGroup = function (name, category, description, image) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').push({
            name: name,
            category: category,
            description: description,
            image: image,
            members: [this.azure.getUserID()],
            rejects: [],
            owner: this.azure.getUserID(),
            posts: []
        });
    };
    /**
     * Save descriptive information about a given group. Users and owner
     * fields are not modified with this function.
     * @param id group ID
     */
    DatabaseProvider.prototype.updateGroup = function (id, name, category, description, image) {
        // must be update() to avoid overwriting users
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
            name: name,
            category: category,
            description: description,
            image: image
        });
    };
    /**
     * Remove a group from the database. This function is unguarded so
     * any verification must take place before the call to here.
     * This will also remove the group from a members favourites.
     * @param id group ID
     */
    DatabaseProvider.prototype.removeGroup = function (id) {
        var _this = this;
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var members = r.val().members;
            members.forEach(function (member) {
                _this.getUser(member).then(function (data) {
                    if (data.val().fav == id)
                        _this.updateUser(member, data.val().name, data.val().intro, data.val().bio, data.val().image, null);
                });
            });
        });
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").remove();
    };
    /**
     * Create a post within a group.
     * @param id ID of group
     * @param post post content (text only)
     */
    DatabaseProvider.prototype.createPost = function (id, post) {
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var posts = r.val().posts || [];
            posts.push({
                content: post,
                stamp: new Date().toLocaleString()
            });
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                posts: posts
            });
        });
    };
    /**
     * Return real-time information about all group posts from a given group.
     * @param id ID of group
     * @param f callback
     */
    DatabaseProvider.prototype.getPosts = function (id, f) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/posts").on('value', f);
    };
    /**
     * Update a post within a group. Note the timestamp is not affected.
     * @param id ID of group
     * @param index post index in list
     */
    DatabaseProvider.prototype.updatePost = function (id, post, index) {
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var posts = r.val().posts;
            posts[index].content = post;
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                posts: posts
            });
        });
    };
    /**
     * Remove a post within a group.
     * @param id ID of group
     * @param index post index in list
     */
    DatabaseProvider.prototype.removePost = function (id, index) {
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var posts = r.val().posts;
            posts.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                posts: posts
            });
        });
    };
    // ========== Group Members ========== \\
    /**
     * Verify whether the current user is the owner of a group.
     */
    DatabaseProvider.prototype.isGroupOwner = function (ownerId) {
        return ownerId == this.azure.getUserID();
    };
    /**
     * Verify whether the current user is a member of a group, given the list
     * of its members.
     * @param members group members
     */
    DatabaseProvider.prototype.isInGroup = function (members) {
        return members.includes(this.azure.getUserID());
    };
    /**
     * Verify whether the current user has blocked seeing a group, given the list
     * of its rejected members.
     * @param rejects rejected members
     */
    DatabaseProvider.prototype.hasRejected = function (rejects) {
        if (!rejects)
            return;
        return rejects.includes(this.azure.getUserID());
    };
    /**
     * Add the current user to the given group iff they are not a
     * member already.
     * @param id group ID
     */
    DatabaseProvider.prototype.addAsGroupMember = function (id) {
        var _this = this;
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var userList = r.val().members;
            if (userList.includes(_this.azure.getUserID()))
                return;
            userList.push(_this.azure.getUserID());
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                members: userList
            });
        });
    };
    /**
     * Remove the current user from the given group.
     * @param id group ID
     */
    DatabaseProvider.prototype.removeAsGroupMember = function (id) {
        var _this = this;
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var userList = r.val().members;
            if (!userList.includes(_this.azure.getUserID()))
                return;
            userList.splice(userList.indexOf(_this.azure.getUserID()), 1);
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                members: userList
            });
        });
    };
    /**
     * Remove the current group from displaying to the user, after they reject a
     * group on the main page.
     * @param id group ID
     */
    DatabaseProvider.prototype.rejectGroup = function (id) {
        var _this = this;
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var rejectList = r.val().rejects || [];
            if (rejectList.includes(_this.azure.getUserID()))
                return;
            rejectList.push(_this.azure.getUserID());
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                rejects: rejectList
            });
        });
    };
    /**
      * Re-add the current group from displaying to the user, removing the rejection Status
      * @param id group ID
      */
    DatabaseProvider.prototype.unrejectGroup = function (id) {
        var _this = this;
        var groupInfo = this.getGroup(id);
        groupInfo.then(function (r) {
            var rejectList = r.val().rejects || [];
            if (!rejectList.includes(_this.azure.getUserID()))
                return;
            rejectList.splice(rejectList.indexOf(_this.azure.getUserID()), 1);
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").update({
                rejects: rejectList
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    AlertProvider.prototype.doToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    AlertProvider.prototype.doAlert = function (title, message, noText, yesText, yesHandler) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: noText
                },
                {
                    text: yesText,
                    handler: yesHandler()
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_azure_ad_azure_ad__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, azure) {
        this.navCtrl = navCtrl;
        this.azure = azure;
        this.azure.initiateProvider();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // Handle callback if this is a redirect from Azure
        this.azure.handleCallback();
        // If already Authenticated, Switch to Homepage.
        if (this.azure.isAuthenticated()) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */]);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\login\login.html"*/'<ion-content text-center>\n\n  <ion-grid>\n\n    <ion-row justify-content-center align-items-center>\n\n      <ion-col>\n\n\n\n        <div class="animated fadeInUp delay-5s">\n\n          <img src="assets/imgs/logo.png" id="main-pic">\n\n          <h1>Welcome to Grouper.</h1>\n\n          <button ion-button (click)="this.azure.login()">Login</button>\n\n        </div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_azure_ad_azure_ad__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageAccountPage = /** @class */ (function () {
    function ManageAccountPage(app, alertCtrl, database, azure) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.azure = azure;
    }
    ManageAccountPage.prototype.deleteAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Delete Account?",
            message: "This action is permanent and cannot be reverted",
            buttons: [
                {
                    text: "Nope, my bad"
                },
                {
                    text: "Yep, do it",
                    handler: function () {
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */], { load: true });
                        setTimeout(function () {
                            _this.database.removeCurrentUser();
                            setTimeout(function () { _this.azure.logout(); }, 3000);
                        }, 1000);
                    }
                }
            ]
        });
        alert.present();
    };
    ManageAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manage-account',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\settings\manage-account\manage-account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Manage Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-card>\n      <h1><strong>Account Removal</strong></h1>\n      <br>\n      <p>\n        This action will permanently delete your account from the Grouper Database, and cannot be reverted. You will be removed from\n        all groups you have joined, and every group you have created will be deleted.\n      </p>\n      <br>\n      <button ion-button (click)="deleteAccount()">DELETE ACCOUNT</button>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\settings\manage-account\manage-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_data_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], ManageAccountPage);
    return ManageAccountPage;
}());

//# sourceMappingURL=manage-account.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageGroupsPage = /** @class */ (function () {
    function ManageGroupsPage(app, database, alertCtrl) {
        this.app = app;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.options = [
            { header: "Delete Owned Groups", description: "This action will delete all Groups you have created", button: "DELETE GROUPS", action: "delete" },
            { header: "Leave Joined Groups", description: "This action will remove you from all Groups that you do not own", button: "LEAVE GROUPS", action: "leave" },
            { header: "Reset Rejected Groups", description: "This action will allow you to see groups you have rejected", button: "RESET REJECTS", action: "reset" }
        ];
    }
    ManageGroupsPage.prototype.handleAction = function (action) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Are you Sure?",
            message: "This action is permanent and cannot be reverted",
            buttons: [
                { text: "Nope, my bad" },
                {
                    text: "Yep, do it",
                    handler: function () {
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingPage */]);
                        if (action == 'delete')
                            _this.deleteGroups();
                        else if (action == 'leave')
                            _this.leaveGroups();
                        else if (action == 'reset')
                            _this.resetRejects();
                    }
                }
            ]
        });
        alert.present();
    };
    ManageGroupsPage.prototype.deleteGroups = function () {
        var _this = this;
        this.database.getAllConstantGroups().subscribe(function (data) {
            data.forEach(function (group) {
                if (_this.database.isGroupOwner(group.owner))
                    _this.database.removeGroup(group.key);
            });
        });
    };
    ManageGroupsPage.prototype.leaveGroups = function () {
        var _this = this;
        this.database.getAllConstantGroups().subscribe(function (data) {
            data.forEach(function (group) {
                if (!_this.database.isGroupOwner(group.owner) && _this.database.isInGroup(group.members))
                    _this.database.removeAsGroupMember(group.key);
            });
        });
    };
    ManageGroupsPage.prototype.resetRejects = function () {
        var _this = this;
        this.database.getAllConstantGroups().subscribe(function (data) {
            data.forEach(function (group) {
                if (_this.database.hasRejected(group.rejects))
                    _this.database.unrejectGroup(group.key);
            });
        });
    };
    ManageGroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manage-groups',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\settings\manage-groups\manage-groups.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Manage Groups</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-card *ngFor="let option of options">\n      <h1><strong>{{option.header}}</strong></h1>\n      <br>\n      <p>\n        {{option.description}}\n      </p>\n      <br>\n      <button ion-button (click)=\'handleAction(option.action)\'>{{option.button}}</button>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\settings\manage-groups\manage-groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ManageGroupsPage);
    return ManageGroupsPage;
}());

//# sourceMappingURL=manage-groups.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        this.intro = this.navParams.get('intro');
        this.bio = this.navParams.get('bio');
        this.image = this.navParams.get('image');
    }
    PublicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-public-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\profile\public-profile\public-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle" *ngIf="intro">{{intro}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item class="profile-item" *ngIf="bio">\n\n      <div text-center>\n\n        <p class="subheading">BIO</p>\n\n        <p>{{bio}}</p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\profile\public-profile\public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());

//# sourceMappingURL=public-profile.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, formBuilder, database, resources, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.database = database;
        this.resources = resources;
        this.alert = alert;
        this.id = this.navParams.get('id');
        this.oldPost = this.navParams.get('oldPost') || "";
        this.index = this.navParams.get('index');
        this.formControl = this.formBuilder.group({
            content: [this.oldPost, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_POST), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    PostPage.prototype.save = function () {
        if (this.formControl.valid) {
            if (this.oldPost != "") {
                this.database.updatePost(this.id, this.formControl.get('content').value, this.index);
                this.navCtrl.pop();
                this.alert.doToast("Post updated!");
            }
            else {
                this.database.createPost(this.id, this.formControl.get('content').value);
                this.navCtrl.pop();
                this.alert.doToast("Post created!");
            }
        }
        else
            this.alert.doToast("Can't have an empty post!");
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-post',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\groups\post\post.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Post</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Content</ion-label>\n\n        <ion-textarea maxlength="{{resources.MAX_LENGTH_POST}}" formControlName="content" class="extra-height"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="save()">Save</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\groups\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_business_resources_resources__["a" /* ResourcesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_list_groups_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_image_image__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_business_editor_editor__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateGroupPage = /** @class */ (function () {
    function CreateGroupPage(navCtrl, toastCtrl, database, formBuilder, imgProvider, resources, edit, alert) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.formBuilder = formBuilder;
        this.imgProvider = imgProvider;
        this.resources = resources;
        this.edit = edit;
        this.alert = alert;
        this.imageURL = 'assets/imgs/icon.png';
        this.formControl = this.edit.getGroupFormBuilder('name', 'category', 'description', '', '', '');
    }
    CreateGroupPage.prototype.create = function () {
        if (this.formControl.valid) {
            this.database.createGroup(this.formControl.get('name').value, this.formControl.get('category').value, this.formControl.get('description').value, this.imageURL);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__groups_list_groups_list__["a" /* GroupsListPage */]);
            this.alert.doToast("Group \"" + this.formControl.get('name').value + "\" created!");
        }
        else
            this.alert.doToast("There is an issue with some of the values you have entered!");
    };
    CreateGroupPage.prototype.uploadEvent = function (event) {
        var self = this;
        this.imgProvider.open();
        this.imgProvider.uploadPicture(event.target['files'].item(0), 'groups').then(function (snapshot) {
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                self.imageURL = downloadURL;
            });
            self.imgProvider.close();
        });
    };
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\groups\create-group\create-group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Create Group</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <div padding text-center>Tap image to change</div>\n\n      <img src="{{this.imageURL}}" id="main-pic" class="group-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadEvent($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_NAME}}" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Category</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_SUB}}" formControlName="category"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Description</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_DESC}}" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="create()">Create</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\groups\create-group\create-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_business_resources_resources__["a" /* ResourcesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_business_editor_editor__["a" /* EditorProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=create-group.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_image_image__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_business_editor_editor__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditGroupPage = /** @class */ (function () {
    function EditGroupPage(navCtrl, navParams, toastCtrl, database, formBuilder, imgProvider, resources, alert, edit) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.formBuilder = formBuilder;
        this.imgProvider = imgProvider;
        this.resources = resources;
        this.alert = alert;
        this.edit = edit;
        this.id = this.navParams.get('id');
        var oldName = this.navParams.get('name');
        var oldCtg = this.navParams.get('category');
        var oldDesc = this.navParams.get('description');
        this.imageURL = this.navParams.get('image');
        this.formControl = this.edit.getGroupFormBuilder('name', 'category', 'description', oldName, oldCtg, oldDesc);
    }
    EditGroupPage.prototype.save = function () {
        if (this.formControl.valid) {
            this.database.updateGroup(this.id, this.formControl.get('name').value, this.formControl.get('category').value, this.formControl.get('description').value, this.imageURL);
            this.navCtrl.pop();
            this.alert.doToast("Updates saved!");
        }
        else
            this.alert.doToast("There is an issue with some of the values you have entered!");
    };
    EditGroupPage.prototype.uploadEvent = function (event) {
        var self = this;
        this.imgProvider.open();
        this.imgProvider.uploadPicture(event.target['files'].item(0), 'groups').then(function (snapshot) {
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                self.imageURL = downloadURL;
            });
            self.imgProvider.close();
        });
    };
    EditGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\edit\edit-group\edit-group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Edit Group</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <div padding text-center>Tap image to change</div>\n\n      <img src="{{this.imageURL}}" id="main-pic" class="user-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadEvent($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_NAME}}" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Category</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_SUB}}" formControlName="category"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Description</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_DESC}}" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="save()">Save</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\edit\edit-group\edit-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_data_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_business_resources_resources__["a" /* ResourcesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_business_editor_editor__["a" /* EditorProvider */]])
    ], EditGroupPage);
    return EditGroupPage;
}());

//# sourceMappingURL=edit-group.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_main_settings_main__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_profile_edit_profile__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groups_group_group__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_database_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrivateProfilePage = /** @class */ (function () {
    function PrivateProfilePage(navCtrl, database) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings_main_settings_main__["a" /* SettingsMainPage */];
    }
    PrivateProfilePage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_edit_profile_edit_profile__["a" /* EditProfilePage */], {
            name: this.name,
            intro: this.intro,
            bio: this.bio,
            image: this.image,
            favGroup: this.favGroup
        });
    };
    PrivateProfilePage.prototype.goToGroupProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__groups_group_group__["a" /* GroupPage */], {
            id: this.favGroup.key,
            name: this.favGroup.val().name,
            category: this.favGroup.val().category,
            description: this.favGroup.val().description,
            members: this.favGroup.val().members,
            image: this.favGroup.val().image,
            isOwner: this.database.isGroupOwner(this.favGroup.val().owner)
        });
    };
    PrivateProfilePage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PrivateProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.database.getCurrentUser().then(function (r) {
            _this.name = r.val().name;
            _this.intro = r.val().intro;
            _this.bio = r.val().bio;
            _this.image = r.val().image;
            if (r.val().fav) {
                _this.database.getGroup(r.val().fav).then(function (g) {
                    _this.favGroup = _this.database.isInGroup(g.val().members) ? g : null;
                });
            }
            else {
                _this.favGroup = null;
            }
        });
    };
    PrivateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-private-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\profile\private-profile\private-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="goHome()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Profile</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <ion-spinner *ngIf="!name"></ion-spinner>\n\n        <p id="loading-text" *ngIf="!intro">Wait for it...</p>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle" *ngIf="intro">{{intro}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item class="profile-item" *ngIf="bio">\n\n      <div text-center>\n\n        <p class="subheading">BIO</p>\n\n        <ion-spinner *ngIf="!bio"></ion-spinner>\n\n        <p>{{bio}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item *ngIf="favGroup">\n\n      <div text-center>\n\n        <p class="subheading">FAVOURITE GROUP</p>\n\n      </div>\n\n      <ion-item (click)="goToGroupProfile()">\n\n        <ion-avatar item-start>\n\n          <img src="{{this.favGroup?.val().image}}" class="group-img">\n\n        </ion-avatar>\n\n        <h2>{{this.favGroup?.val().name}}</h2>\n\n        <p>{{this.favGroup?.val().category}}</p>\n\n      </ion-item>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right class="padded-fab">\n\n    <button ion-fab (click)="editProfile()">\n\n      <ion-icon name="create"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\profile\private-profile\private-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_data_database_database__["a" /* DatabaseProvider */]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=private-profile.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_image_image__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, formBuilder, database, imgProvider, resources, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.database = database;
        this.imgProvider = imgProvider;
        this.resources = resources;
        this.alert = alert;
        this.groups = [];
        var oldName = this.navParams.get('name');
        var oldIntro = this.navParams.get('intro');
        var oldBio = this.navParams.get('bio');
        this.favGroup = this.navParams.get('favGroup');
        this.image = this.navParams.get('image');
        var favName = '- - -';
        if (this.favGroup)
            favName = this.favGroup.val().name;
        this.formControl = this.formBuilder.group({
            name: [oldName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_NAME), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-z ,.'-]+$/i), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            intro: [oldIntro, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_SUB)])],
            bio: [oldBio, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_DESC)])],
            fav: [favName]
        });
        this.database.getAllGroups(function (snap) {
            snap.forEach(function (r) {
                if (_this.database.isInGroup(r.val().members)) {
                    _this.groups.push(r);
                }
            });
        });
    }
    EditProfilePage.prototype.save = function () {
        if (this.formControl.valid) {
            var favKey = null;
            if (this.favGroup)
                favKey = this.favGroup.key;
            this.database.updateCurrentUser(this.formControl.get('name').value, this.formControl.get('intro').value, this.formControl.get('bio').value, this.image, favKey);
            this.navCtrl.pop();
            this.alert.doToast("Updates saved!");
        }
        else
            this.alert.doToast("There is an issue with some of the values you have entered!");
    };
    EditProfilePage.prototype.uploadEvent = function (event) {
        var self = this;
        this.imgProvider.open();
        this.imgProvider.uploadPicture(event.target['files'].item(0), 'users').then(function (snapshot) {
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                self.image = downloadURL;
            });
            self.imgProvider.close();
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\edit\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Edit Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <div padding text-center>Tap image to change</div>\n\n      <img src="{{this.image}}" id="main-pic" class="user-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadEvent($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_NAME}}" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Introduction</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_SUB}}" formControlName="intro"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Bio</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_DESC}}" formControlName="bio"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Favourite Group</ion-label>\n\n        <ion-select formControlName="fav">\n\n          <ion-option (ionSelect)="this.favGroup = null">- - -</ion-option>\n\n          <ion-option *ngFor="let group_obj of groups" (ionSelect)="this.favGroup = group_obj">{{group_obj.val().name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="save()">Save</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\edit\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_business_resources_resources__["a" /* ResourcesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_picture_signup_picture__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_business_editor_editor__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupDetailsPage = /** @class */ (function () {
    function SignupDetailsPage(navCtrl, formBuilder, resources, edit, alert) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.resources = resources;
        this.edit = edit;
        this.alert = alert;
        this.formControl = this.edit.getGroupFormBuilder('name', 'intro', 'bio', '', '', '');
    }
    SignupDetailsPage.prototype.nextPage = function () {
        if (this.formControl.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_picture_signup_picture__["a" /* SignupPicturePage */], {
                name: this.formControl.get('name').value,
                intro: this.formControl.get('intro').value,
                bio: this.formControl.get('bio').value
            });
        }
        else
            this.alert.doToast("There is an issue with some of the values you have entered!");
    };
    SignupDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-details',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-details\signup-details.html"*/'<ion-content padding text-center>\n\n  <img src="assets/imgs/logo.png" id="small-pic">\n\n  <h2 id="heading">Welcome to Grouper.</h2>\n\n  <div id="alert">\n\n    <ion-icon name="alert" id="alert-icon"></ion-icon>\n\n    <div id="alert-text">\n\n      <p>\n\n        <strong>Before you jump in, we need some info from you!</strong>\n\n      </p>\n\n    </div>\n\n  </div>\n\n\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_NAME}}" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Introduction</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_SUB}}" formControlName="intro"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Bio</ion-label>\n\n        <ion-input type="text" maxlength="{{resources.MAX_LENGTH_DESC}}" formControlName="bio"></ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button class="button-margin" (click)="nextPage()" [disabled]="false">Next</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-details\signup-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_business_resources_resources__["a" /* ResourcesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_business_editor_editor__["a" /* EditorProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], SignupDetailsPage);
    return SignupDetailsPage;
}());

//# sourceMappingURL=signup-details.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_confirm_signup_confirm__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_image_image__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPicturePage = /** @class */ (function () {
    function SignupPicturePage(navCtrl, navParams, imgProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgProvider = imgProvider;
        this.name = this.navParams.get('name');
        this.intro = this.navParams.get('intro');
        this.bio = this.navParams.get('bio');
        this.imageURL = 'assets/imgs/profile.png';
    }
    SignupPicturePage.prototype.uploadEvent = function (event) {
        var self = this;
        this.imgProvider.open();
        this.imgProvider.uploadPicture(event.target['files'].item(0), 'users').then(function (snapshot) {
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                self.imageURL = downloadURL;
            });
            self.imgProvider.close();
        });
    };
    SignupPicturePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_confirm_signup_confirm__["a" /* SignupConfirmPage */], {
            name: this.name,
            intro: this.intro,
            bio: this.bio,
            imageURL: this.imageURL
        });
        console.log(this.imageURL);
    };
    SignupPicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-picture',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-picture\signup-picture.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Choose a Picture</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n  <div id="heading-signup">\n\n    <ion-icon name="happy" id="heading-icon"></ion-icon>\n\n    <h2 id="heading-text">Hi {{this.name}}!</h2>\n\n  </div>\n\n\n\n  <p id="info-text">\n\n    <strong>We\'ve got all the data we need to get you started. If you want, you can add a picture to your profile!</strong>\n\n    <br/>(Tap below to select an image.)\n\n  </p>\n\n\n\n  <ion-grid text-center>\n\n    <ion-row nowrap>\n\n      <ion-col class="image-upload">\n\n        <label for="file-input">\n\n          <img src="{{this.imageURL}}" id="main-pic" class="user-picture">\n\n        </label>\n\n        <input type="file" id="file-input" (change)="uploadEvent($event)" accept="image/*">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-button id="next-button" (click)="nextPage()" [disabled]="false">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-picture\signup-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_image_image__["a" /* ImageProvider */]])
    ], SignupPicturePage);
    return SignupPicturePage;
}());

//# sourceMappingURL=signup-picture.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupConfirmPage = /** @class */ (function () {
    function SignupConfirmPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.name = this.navParams.get('name');
        this.intro = this.navParams.get('intro');
        this.bio = this.navParams.get('bio');
        this.imageURL = this.navParams.get('imageURL');
    }
    SignupConfirmPage.prototype.confirmUser = function () {
        this.database.createUser(this.name, this.intro, this.bio, this.imageURL);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-confirm',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-confirm\signup-confirm.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Confirm Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div id="heading-signup">\n\n    <ion-icon name="alert" id="heading-icon"></ion-icon>\n\n    <h2 id="heading-text">Does this look right?</h2>\n\n  </div>\n\n\n\n  <ion-avatar>\n\n    <img src="{{this.imageURL}}" id="main-pic">\n\n  </ion-avatar>\n\n  <div text-center>\n\n    <p id="heading">{{name}}</p>\n\n    <p id="subtitle">{{intro}}</p>\n\n  </div>\n\n\n\n  <ion-grid>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-button (click)="confirmUser()">Confirm</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\signup\signup-confirm\signup-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__["a" /* DatabaseProvider */]])
    ], SignupConfirmPage);
    return SignupConfirmPage;
}());

//# sourceMappingURL=signup-confirm.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
var FirebaseConfig = /** @class */ (function () {
    function FirebaseConfig() {
        this.firebaseConfig = {
            apiKey: "AIzaSyA-KRXx4OqCmLW9_JAV7mpBqrbLJwV56GA",
            authDomain: "grouper-swen325-2018.firebaseapp.com",
            databaseURL: "https://grouper-swen325-2018.firebaseio.com",
            projectId: "grouper-swen325-2018",
            storageBucket: "grouper-swen325-2018.appspot.com",
            messagingSenderId: "1001940929452"
        };
    }
    return FirebaseConfig;
}());

//# sourceMappingURL=firebase-config.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loading_loading__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_groups_groups_list_groups_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_private_profile_private_profile__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings_main_settings_main__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_details_signup_details__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_picture_signup_picture__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_confirm_signup_confirm__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_groups_group_group__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_public_profile_public_profile__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_groups_create_group_create_group__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_group_edit_group__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_edit_profile_edit_profile__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_groups_post_post__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_adal_angular5__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_adal_angular5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_adal_angular5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_css_animator__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_data_azure_ad_azure_ad__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_data_image_image__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_business_resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_business_editor_editor__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_business_alert_alert__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_data_firebase_config__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_settings_manage_account_manage_account__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_settings_manage_groups_manage_groups__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // MAIN PAGES
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_groups_groups_list_groups_list__["a" /* GroupsListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                // AUXILIARY PAGES
                __WEBPACK_IMPORTED_MODULE_14__pages_groups_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_public_profile_public_profile__["a" /* PublicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_groups_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_25_css_animator__["AnimatesDirective"],
                // SETTINGS PAGES
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings_main_settings_main__["a" /* SettingsMainPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_settings_manage_account_manage_account__["a" /* ManageAccountPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_manage_groups_manage_groups__["a" /* ManageGroupsPage */],
                // SIGNUP PAGES
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_details_signup_details__["a" /* SignupDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_picture_signup_picture__["a" /* SignupPicturePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_confirm_signup_confirm__["a" /* SignupConfirmPage */],
                // EDIT PAGES
                __WEBPACK_IMPORTED_MODULE_16__pages_groups_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // MAIN PAGES
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_groups_groups_list_groups_list__["a" /* GroupsListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                // AUXILIARY PAGES
                __WEBPACK_IMPORTED_MODULE_14__pages_groups_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_public_profile_public_profile__["a" /* PublicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_groups_post_post__["a" /* PostPage */],
                // SETTINGS PAGES
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings_main_settings_main__["a" /* SettingsMainPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_settings_manage_account_manage_account__["a" /* ManageAccountPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_manage_groups_manage_groups__["a" /* ManageGroupsPage */],
                // SIGNUP PAGES
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_details_signup_details__["a" /* SignupDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_picture_signup_picture__["a" /* SignupPicturePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_confirm_signup_confirm__["a" /* SignupConfirmPage */],
                // EDIT PAGES
                __WEBPACK_IMPORTED_MODULE_16__pages_groups_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22_adal_angular5__["Adal5Service"],
                { provide: __WEBPACK_IMPORTED_MODULE_22_adal_angular5__["Adal5HTTPService"], useFactory: __WEBPACK_IMPORTED_MODULE_22_adal_angular5__["Adal5HTTPService"].factory, deps: [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_22_adal_angular5__["Adal5Service"]] },
                __WEBPACK_IMPORTED_MODULE_25_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_26__providers_data_azure_ad_azure_ad__["a" /* AzureAdProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_data_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_data_image_image__["a" /* ImageProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_business_resources_resources__["a" /* ResourcesProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_business_editor_editor__["a" /* EditorProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_business_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_data_firebase_config__["a" /* FirebaseConfig */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_azure_ad_azure_ad__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_firebase_config__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, azure, config) {
        var _this = this;
        this.azure = azure;
        this.config = config;
        platform.ready().then(function () {
            if (_this.azure.isAuthenticated())
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            else
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase__["initializeApp"](this.config.firebaseConfig);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_azure_ad_azure_ad__["a" /* AzureAdProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_data_firebase_config__["a" /* FirebaseConfig */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesProvider = /** @class */ (function () {
    function ResourcesProvider() {
        this.MAX_LENGTH_NAME = 32;
        this.MAX_LENGTH_SUB = 16;
        this.MAX_LENGTH_DESC = 64;
        this.MAX_LENGTH_POST = 140;
    }
    ResourcesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResourcesProvider);
    return ResourcesProvider;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureAdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular5__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_adal_angular5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AzureAdProvider = /** @class */ (function () {
    function AzureAdProvider(service) {
        this.service = service;
        this.config = {
            tenant: 'myvuwac.onmicrosoft.com',
            clientId: 'd86cfb48-98a0-408e-80a5-3dd2e7e6aabb'
        };
    }
    // ========== User Information ========== \\
    AzureAdProvider.prototype.getUserID = function () {
        return this.service.userInfo.profile.oid;
    };
    AzureAdProvider.prototype.isAuthenticated = function () {
        return this.service.userInfo.authenticated;
    };
    // ========== Core Functionality ========== \\
    AzureAdProvider.prototype.initiateProvider = function () {
        this.service.init(this.config);
    };
    AzureAdProvider.prototype.handleCallback = function () {
        this.service.handleWindowCallback();
    };
    AzureAdProvider.prototype.login = function () {
        this.service.login();
    };
    AzureAdProvider.prototype.logout = function () {
        this.service.logOut();
    };
    AzureAdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_adal_angular5__["Adal5Service"]])
    ], AzureAdProvider);
    return AzureAdProvider;
}());

//# sourceMappingURL=azure-ad.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_main_settings_main__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groups_group_group__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, change, database, http, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.change = change;
        this.database = database;
        this.http = http;
        this.alert = alert;
        this.hideButtonText = "Hide";
        this.joinButtonText = "Join";
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_5__settings_settings_main_settings_main__["a" /* SettingsMainPage */];
        setTimeout(function () {
            _this.hideButtonText = null;
            _this.joinButtonText = null;
        }, 3000);
    }
    HomePage.prototype.swipeRight = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.swipeLeft = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.reject = function () {
        var currentGroup = this.slide_data[(this.slides.getActiveIndex())];
        if (!currentGroup)
            return;
        if (this.slides.getActiveIndex() == (this.slide_data.length - 1))
            this.swipeLeft();
        this.database.rejectGroup(currentGroup.key);
        this.alert.doToast("You have blocked the group \"" + currentGroup.val().name + "\"!");
    };
    HomePage.prototype.register = function () {
        var currentGroup = this.slide_data[(this.slides.getActiveIndex())];
        if (!currentGroup)
            return;
        if (this.slides.getActiveIndex() == (this.slide_data.length - 1))
            this.swipeLeft();
        this.database.addAsGroupMember(currentGroup.key);
        this.alert.doToast("You were added to group \"" + currentGroup.val().name + "\"!");
    };
    HomePage.prototype.goToGroupProfile = function () {
        var currentGroup = this.slide_data[(this.slides.getActiveIndex())];
        if (!currentGroup)
            return;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__groups_group_group__["a" /* GroupPage */], {
            id: currentGroup.key,
            name: currentGroup.val().name,
            category: currentGroup.val().category,
            description: currentGroup.val().description,
            members: currentGroup.val().members,
            image: currentGroup.val().image
        });
        this.slides.slideTo(0);
    };
    /* ======================================================================== */
    HomePage.prototype.homeToast = function () {
        var _this = this;
        var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
        this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            var html = data[0].content;
            var div = document.createElement("div");
            div.innerHTML = html;
            var text = div.textContent || div.innerText || "";
            _this.alert.doToast("\"" + text + "\" - " + data[0].title);
        });
    };
    /* ======================================================================== */
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // get all group info and attach a listener so that it is continuously updated on changes
        this.database.getAllGroups(function (snap) {
            _this.slide_data = [];
            snap.forEach(function (r) {
                if (!(_this.database.isInGroup(r.val().members)))
                    if (!(_this.database.hasRejected(r.val().rejects)))
                        _this.slide_data.push(r);
            });
            _this.change.markForCheck(); // manually trigger change event as nothing else will
            // LINE 94 WAS .detectChanges()
            // FIXES INCLUDE
            // if (!this.change['destroyed']) {}
            // ngOnDestroy and detach change ref
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="homeToast()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Home</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides id="slide" no-padding>\n\n    <ion-slide *ngIf="slide_data == undefined">\n\n      <ion-spinner></ion-spinner>\n\n      <p>Finding groups...</p>\n\n    </ion-slide>\n\n    <ion-slide *ngIf="slide_data?.length == 0">\n\n      <ion-icon name="sad" id="sad-face"></ion-icon>\n\n      <p>No groups to display!</p>\n\n    </ion-slide>\n\n    <ion-slide *ngFor="let slide_obj of slide_data" (click)="goToGroupProfile()">\n\n      <ion-avatar>\n\n        <img src="{{slide_obj.val().image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <p id="heading">{{slide_obj.val().name}}</p>\n\n      <p id="subtitle">{{slide_obj.val().category}}</p>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-grid id="grid" padding>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-fab round (click)="swipeLeft()" class="secbutton">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="reject()" class="main-btn">\n\n          <ion-icon *ngIf="!hideButtonText" name="close" class="main-btn-icon"></ion-icon>\n\n          <ion-label *ngIf="hideButtonText" class="main-btn-text">{{hideButtonText}}</ion-label>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="register()" class="main-btn">\n\n          <ion-icon *ngIf="!joinButtonText" name="checkmark" class="main-btn-icon"></ion-icon>\n\n          <ion-label *ngIf="joinButtonText" class="main-btn-text">{{joinButtonText}}</ion-label>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="swipeRight()" class="secbutton">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageProvider = /** @class */ (function () {
    function ImageProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    ImageProvider.prototype.open = function () {
        this.loading = this.loadingCtrl.create({
            content: "Uploading your image..."
        });
        this.loading.present();
    };
    ImageProvider.prototype.close = function () {
        this.loading.dismiss();
    };
    // ========== Image Storage  ========== \\
    ImageProvider.prototype.uploadPicture = function (file, type) {
        if (!file)
            return;
        if (file.type.split('/')[0] == 'image') {
            var image_1 = new Date().getTime() + "." + file.type.split('/')[1], storageRef_1, parseUpload_1;
            return new Promise(function (resolve, reject) {
                storageRef_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref(type + image_1);
                parseUpload_1 = storageRef_1.put(file);
                parseUpload_1.on('state_changed', function () { }, function (error) { return reject(error); }, function () { return resolve(parseUpload_1.snapshot); });
            });
        }
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_details_signup_details__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadingPage = /** @class */ (function () {
    function LoadingPage(navCtrl, navParams, database, http) {
        var _this = this;
        this.http = http;
        if (!navParams.get('load')) {
            this.header = "Loading Grouper...";
            this.http.get('assets/text/loading.json').subscribe(function (r) {
                var data = r.json();
                _this.message = data[Math.floor(Math.random() * data.length)];
            });
            database.getCurrentUser().then(function (data) {
                if (!data.exists()) {
                    navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup_details_signup_details__["a" /* SignupDetailsPage */]);
                }
                else
                    navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            });
        }
        else {
            this.header = "Deleting Account...";
            this.message = "We miss you already!";
        }
    }
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\loading\loading.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>{{ header }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding center text-center>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-spinner id="spinner"></ion-spinner>\n\n        <p id="text">{{ message }}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_account_manage_account__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_groups_manage_groups__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsMainPage = /** @class */ (function () {
    function SettingsMainPage(database) {
        this.database = database;
        this.groups = [];
        this.options = [
            { header: "Manage Account", description: "Manage your Grouper Account!", nav: __WEBPACK_IMPORTED_MODULE_2__manage_account_manage_account__["a" /* ManageAccountPage */] },
            { header: "Manage Groups", description: "Manage Groups you have Joined / Rejected!", nav: __WEBPACK_IMPORTED_MODULE_3__manage_groups_manage_groups__["a" /* ManageGroupsPage */] }
        ];
    }
    SettingsMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings-main',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\settings\settings-main\settings-main.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card *ngFor="let option of options" [navPush]="option.nav">\n      <h2>{{option.header}}</h2>\n      <p>{{option.description}}</p>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\settings\settings-main\settings-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_database_database__["a" /* DatabaseProvider */]])
    ], SettingsMainPage);
    return SettingsMainPage;
}());

//# sourceMappingURL=settings-main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_public_profile_public_profile__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_business_alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupPage = /** @class */ (function () {
    function GroupPage(navCtrl, navParams, alertCtrl, database, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.alert = alert;
        this.members = [];
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        this.category = this.navParams.get('category');
        this.description = this.navParams.get('description');
        this.image = this.navParams.get('image');
        this.isOwner = this.navParams.get('isOwner');
        // load members from database
        this.navParams.get('members').forEach(function (member) {
            _this.database.getUser(member).then(function (data) {
                _this.members.push({
                    id: member,
                    name: data.val().name,
                    intro: data.val().intro,
                    bio: data.val().bio,
                    image: data.val().image
                });
            });
        });
    }
    GroupPage.prototype.register = function () {
        this.database.addAsGroupMember(this.id);
        this.alert.doToast("You were added to group \"" + this.name + "\"!");
        this.navCtrl.pop();
    };
    GroupPage.prototype.goToPublicProfile = function (member) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_public_profile_public_profile__["a" /* PublicProfilePage */], {
            name: member.name,
            intro: member.intro,
            bio: member.bio,
            image: member.image
        });
    };
    GroupPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__post_post__["a" /* PostPage */], {
            id: this.id,
            posts: this.posts
        });
    };
    GroupPage.prototype.editPost = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__post_post__["a" /* PostPage */], {
            id: this.id,
            posts: this.posts,
            oldPost: this.posts[index].content,
            index: index
        });
    };
    GroupPage.prototype.removePost = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm delete post?",
            message: "Sure you wanna delete?",
            buttons: [
                {
                    text: "Nah"
                },
                {
                    text: "Yeah",
                    handler: function () {
                        _this.database.removePost(_this.id, index);
                        _this.alert.doToast("Post removed!");
                    }
                }
            ]
        });
        alert.present();
    };
    GroupPage.prototype.isInGroup = function () {
        return this.database.isInGroup(this.navParams.get('members'));
    };
    GroupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // All other data apart from posts is static (dependent from parameters
        // provided from last page. This is so that the user does not get real-time
        // updates on data that should remain the same throughout. As an example, a
        // user may become confused if the description of the group changes while
        // they are reading it.
        this.database.getPosts(this.navParams.get('id'), function (r) {
            _this.posts = r.val();
        });
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\IOnic\src\pages\groups\group\group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Group Profile</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only *ngIf="!(isInGroup())" (click)="register()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle">{{category}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item *ngIf=\'description != ""\' class="profile-item">\n\n      <div text-center>\n\n        <p class="subheading">Description</p>\n\n        <p>{{description}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div text-center>\n\n        <p class="subheading">Members</p>\n\n      </div>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-2 *ngFor="let member of members">\n\n            <ion-avatar item-start (click)="goToPublicProfile(member)">\n\n              <img src="{{member.image}}" class="group-img">\n\n            </ion-avatar>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item *ngIf="isInGroup() && posts">\n\n      <div text-center>\n\n        <p class="subheading">Posts</p>\n\n      </div>\n\n      <!-- print in reverse so that most recent posts are at the top -->\n\n      <ion-card *ngFor="let post of posts.reverse(); let i = index">\n\n        <ion-card-header class="timestamp">{{post.stamp}}</ion-card-header>\n\n        <ion-card-content text-wrap>{{post.content}}</ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col *ngIf="isOwner">\n\n              <button ion-button icon-start clear (click)="editPost(posts.length - i - 1)">\n\n                <ion-icon name="create"></ion-icon>\n\n                <div>Edit</div>\n\n              </button> \n\n            </ion-col>\n\n            <ion-col *ngIf="isOwner">\n\n              <button ion-button icon-start clear color="danger" (click)="removePost(posts.length - i - 1)">\n\n                <ion-icon name="trash"></ion-icon>\n\n                <div>Delete</div>\n\n              </button> \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right *ngIf="isOwner" class="padded-fab">\n\n    <button ion-fab (click)="createPost()">\n\n      <ion-icon name="send"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\IOnic\src\pages\groups\group\group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_business_alert_alert__["a" /* AlertProvider */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_resources__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorProvider = /** @class */ (function () {
    function EditorProvider(formBuilder, resources, alert) {
        this.formBuilder = formBuilder;
        this.resources = resources;
        this.alert = alert;
    }
    EditorProvider.prototype.getGroupFormBuilder = function (name, sub, desc, oldName, oldSub, oldDesc) {
        return this.formBuilder.group((_a = {},
            _a[name] = [oldName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_NAME), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            _a[sub] = [oldSub, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_SUB)])],
            _a[desc] = [oldDesc, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(this.resources.MAX_LENGTH_DESC)])],
            _a));
        var _a;
    };
    EditorProvider.prototype.save = function (self, formControl, f, n, args, successMsg) {
        if (formControl.valid) {
            f.apply(self, args);
            n();
            this.alert.doToast(successMsg);
        }
        else
            this.alert.doToast("There is an issue with some of the values you have entered!");
    };
    EditorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__resources_resources__["a" /* ResourcesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertProvider */]])
    ], EditorProvider);
    return EditorProvider;
}());

//# sourceMappingURL=editor.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map