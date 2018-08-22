webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_groups_list_groups_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_private_profile_private_profile__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_azure_ad_azure_ad__ = __webpack_require__(47);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__groups_groups_list_groups_list__["a" /* GroupsListPage */];
        this.tab3Root = null;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__profile_private_profile_private_profile__["a" /* PrivateProfilePage */];
        this.tab5Root = null;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="refresh" (ionSelect)="refresh()"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="exit" (ionSelect)="logout()"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_group__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_group_create_group__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_group_edit_group__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(28);
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
    function GroupsListPage(navCtrl, alertCtrl, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
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
                            var toast = _this.toastCtrl.create({
                                message: "Group \"" + name + "\" removed!",
                                duration: 3000
                            });
                            toast.present();
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
                            var toast = _this.toastCtrl.create({
                                message: "Successfully left \"" + name + "\"!",
                                duration: 3000
                            });
                            toast.present();
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
            image: currentGroup.val().image
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
            selector: 'page-groups-list',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\groups-list\groups-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="goHome()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Groups</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list no-lines>\n\n\n\n    <ion-item *ngIf="group_data == undefined">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <ion-spinner></ion-spinner>\n\n            <p id="loading-text">Retrieving your groups...</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item *ngFor="let group_obj of group_data; let i = index">\n\n      <ion-avatar item-start>\n\n        <img src="{{group_obj.val().image}}" class="group-img">\n\n        <ion-badge>{{group_obj.val().members.length}}</ion-badge>\n\n      </ion-avatar>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col class="overflow" (click)="goToGroupProfile(i)">\n\n            <h2>{{group_obj.val().name}}</h2>\n\n            <p>{{group_obj.val().category}}</p>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-buttons right>\n\n              <button ion-button icon-only clear *ngIf="isOwner(i)" (click)="editGroup(i)">\n\n                <ion-icon name="create"></ion-icon>\n\n              </button>\n\n              <button ion-button icon-only clear (click)="remove(i)">\n\n                <ion-icon name="close"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right class="padded-fab">\n\n    <button ion-fab [navPush]="toCreateGroupPage">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\groups-list\groups-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], GroupsListPage);
    return GroupsListPage;
}());

//# sourceMappingURL=groups-list.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__ = __webpack_require__(47);
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
    DatabaseProvider.prototype.updateCurrentUser = function (name, intro, bio, imageURL, fav) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("users/" + this.azure.getUserID() + "/").set({
            name: name,
            intro: intro,
            bio: bio,
            image: imageURL,
            fav: fav
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
            owner: this.azure.getUserID()
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
       * @param id group ID
       */
    DatabaseProvider.prototype.removeGroup = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("groups/" + id + "/").remove();
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
            userList.splice(userList.indexOf(_this.azure.getUserID()));
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
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_azure_ad_azure_ad__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(360);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\login\login.html"*/'<ion-content text-center>\n\n  <ion-grid>\n\n    <ion-row justify-content-center align-items-center>\n\n      <ion-col>\n\n\n\n        <div class="animated fadeInUp delay-5s">\n\n          <img src="assets/imgs/logo.png" id="main-pic">\n\n          <h1>Welcome to Grouper.</h1>\n\n          <button ion-button (click)="this.azure.login()">Login</button>\n\n        </div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_details_signup_details__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(160);
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
    function LoadingPage(navCtrl, database, http) {
        var _this = this;
        this.http = http;
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
    LoadingPage.prototype.getRandomLoadingText = function () {
        this.http.get('assets/text/loading.json').subscribe(function (r) {
            //
        });
        //var rand = myArray[Math.floor(Math.random() * myArray.length)];
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\loading\loading.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Loading Grouper...</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding center text-center>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-spinner id="spinner"></ion-spinner>\n\n        <p id="text">{{ message }}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
            selector: 'page-public-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\profile\public-profile\public-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle" *ngIf="intro">{{intro}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item class="profile-item" *ngIf="bio">\n\n      <div text-center>\n\n        <p class="subheading">BIO</p>\n\n        <p>{{bio}}</p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\profile\public-profile\public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());

//# sourceMappingURL=public-profile.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_list_groups_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(67);
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
    function CreateGroupPage(navCtrl, toastCtrl, database, formBuilder, imgProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.formBuilder = formBuilder;
        this.imgProvider = imgProvider;
        this.imageURL = 'assets/imgs/icon.png';
        this.formControl = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(16)])],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64)])]
        });
    }
    CreateGroupPage.prototype.create = function () {
        if (this.formControl.valid) {
            this.database.createGroup(this.formControl.get('name').value, this.formControl.get('category').value, this.formControl.get('description').value, this.imageURL);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__groups_list_groups_list__["a" /* GroupsListPage */]);
            this.doToast("Group \"" + this.formControl.get('name').value + "\" created!");
        }
        else
            this.doToast("There is an issue with some of the values you have entered!");
    };
    CreateGroupPage.prototype.uploadPicture = function (event) {
        var _this = this;
        var file = event.target['files'].item(0);
        var self = this;
        if (!file)
            return; // When the user doesn't provide a file
        if (file.type.split('/')[0] == 'image') {
            this.imgProvider.open();
            this.imgProvider.uploadGroupImage(file).then(function (snapshot) {
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    self.imageURL = downloadURL;
                });
                _this.imgProvider.close();
            });
        }
        else
            console.log("Not Image Type");
    };
    CreateGroupPage.prototype.doToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\create-group\create-group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Create Group</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <img src="{{this.imageURL}}" id="main-pic" class="group-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadPicture($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="32" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Category</ion-label>\n\n        <ion-input type="text" maxlength="16" formControlName="category"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Description</ion-label>\n\n        <ion-input type="text" maxlength="64" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="create()">Create</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\create-group\create-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=create-group.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(67);
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
    function EditGroupPage(navCtrl, navParams, toastCtrl, database, formBuilder, imgProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.formBuilder = formBuilder;
        this.imgProvider = imgProvider;
        this.id = this.navParams.get('id');
        this.oldName = this.navParams.get('name');
        this.oldCtg = this.navParams.get('category');
        this.oldDesc = this.navParams.get('description');
        this.imageURL = this.navParams.get('image');
        console.log(this.imageURL);
        this.formControl = this.formBuilder.group({
            name: [this.oldName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            category: [this.oldCtg, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16)])],
            description: [this.oldDesc, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(64)])]
        });
    }
    EditGroupPage.prototype.save = function () {
        if (this.formControl.valid) {
            this.database.updateGroup(this.id, this.formControl.get('name').value, this.formControl.get('category').value, this.formControl.get('description').value, this.imageURL);
            this.navCtrl.pop();
            this.doToast("Updates saved!");
        }
        else
            this.doToast("There is an issue with some of the values you have entered!");
    };
    EditGroupPage.prototype.uploadPicture = function (event) {
        var _this = this;
        var file = event.target['files'].item(0);
        var self = this;
        if (!file)
            return; // When the user doesn't provide a file
        if (file.type.split('/')[0] == 'image') {
            this.imgProvider.open();
            this.imgProvider.uploadGroupImage(file).then(function (snapshot) {
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    self.imageURL = downloadURL;
                });
                _this.imgProvider.close();
            });
        }
        else
            console.log("Not Image Type");
    };
    EditGroupPage.prototype.doToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    EditGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\edit\edit-group\edit-group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Edit Group</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <img src="{{this.imageURL}}" id="main-pic" class="user-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadPicture($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="32" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Category</ion-label>\n\n        <ion-input type="text" maxlength="16" formControlName="category"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Description</ion-label>\n\n        <ion-input type="text" maxlength="64" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="save()">Save</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\edit\edit-group\edit-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */]])
    ], EditGroupPage);
    return EditGroupPage;
}());

//# sourceMappingURL=edit-group.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_profile_edit_profile__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groups_group_group__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(28);
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
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
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
            image: this.favGroup.val().image
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
                    _this.favGroup = g;
                });
            }
            else {
                _this.favGroup = null;
            }
        });
    };
    PrivateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-private-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\profile\private-profile\private-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="goHome()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Profile</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <!-- <p id="heading" *ngIf="name == undefined">Wait for it...</p> -->\n\n        <ion-spinner *ngIf="!name"></ion-spinner>\n\n        <p id="loading-text" *ngIf="!intro">Wait for it...</p>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle" *ngIf="intro">{{intro}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item class="profile-item" *ngIf="bio">\n\n      <div text-center>\n\n        <p class="subheading">BIO</p>\n\n        <!-- <p *ngIf="bio == undefined">Wait for it...</p> -->\n\n        <ion-spinner *ngIf="!bio"></ion-spinner>\n\n        <p>{{bio}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item *ngIf="favGroup">\n\n      <div text-center>\n\n        <p class="subheading">FAVOURITE GROUP</p>\n\n      </div>\n\n      <ion-item (click)="goToGroupProfile()">\n\n        <ion-avatar item-start>\n\n          <img src="{{this.favGroup?.val().image}}" class="group-img">\n\n        </ion-avatar>\n\n        <h2>{{this.favGroup?.val().name}}</h2>\n\n        <p>{{this.favGroup?.val().category}}</p>\n\n      </ion-item>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right class="padded-fab">\n\n    <button ion-fab (click)="editProfile()">\n\n      <ion-icon name="create"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\profile\private-profile\private-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=private-profile.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(67);
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
    function EditProfilePage(navCtrl, navParams, toastCtrl, formBuilder, database, imgProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.database = database;
        this.imgProvider = imgProvider;
        this.groups = [];
        this.oldName = this.navParams.get('name');
        this.oldIntro = this.navParams.get('intro');
        this.oldBio = this.navParams.get('bio');
        this.favGroup = this.navParams.get('favGroup');
        this.image = this.navParams.get('image');
        var favName = '- - -';
        if (this.favGroup)
            favName = this.favGroup.val().name;
        this.formControl = this.formBuilder.group({
            name: [this.oldName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-z ,.'-]+$/i), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            intro: [this.oldIntro, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(16)])],
            bio: [this.oldBio, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64)])],
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
            this.doToast("Updates saved!");
        }
        else
            this.doToast("There is an issue with some of the values you have entered!");
    };
    EditProfilePage.prototype.uploadPicture = function (event) {
        var _this = this;
        var file = event.target['files'].item(0);
        var self = this;
        if (!file)
            return; // When the user doesn't provide a file
        if (file.type.split('/')[0] == 'image') {
            this.imgProvider.open();
            this.imgProvider.uploadUserImage(file).then(function (snapshot) {
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    self.image = downloadURL;
                });
                _this.imgProvider.close();
            });
        }
        else
            console.log("Not Image Type");
    };
    EditProfilePage.prototype.doToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\edit\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Edit Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-avatar class="image-upload">\n\n    <label for="file-input">\n\n      <img src="{{this.image}}" id="main-pic" class="user-picture">\n\n    </label>\n\n    <input type="file" id="file-input" (change)="uploadPicture($event)" accept="image/*">\n\n  </ion-avatar>\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="32" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Introduction</ion-label>\n\n        <ion-input type="text" maxlength="16" formControlName="intro"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Bio</ion-label>\n\n        <ion-input type="text" maxlength="64" formControlName="bio"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Favourite Group</ion-label>\n\n        <ion-select formControlName="fav">\n\n          <ion-option (ionSelect)="this.favGroup = null">- - -</ion-option>\n\n          <ion-option *ngFor="let group_obj of groups" (ionSelect)="this.favGroup = group_obj">{{group_obj.val().name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-input [hidden]="true"></ion-input>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <ion-grid padding>\n\n    <ion-row justify-content-center>\n\n      <button ion-button (click)="save()">Save</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\edit\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_picture_signup_picture__ = __webpack_require__(368);
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
    function SignupDetailsPage(navCtrl, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.formControl = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[a-z ,.'-]+$/i), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            intro: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(16)])],
            bio: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64)])]
        });
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
            this.detailsToast();
    };
    SignupDetailsPage.prototype.detailsToast = function () {
        var toast = this.toastCtrl.create({
            message: "There is an issue with some of the values you have entered!",
            duration: 3000
        });
        toast.present();
    };
    SignupDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-details',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-details\signup-details.html"*/'<ion-content padding text-center>\n\n  <img src="assets/imgs/logo.png" id="small-pic">\n\n  <h2 id="heading">Welcome to Grouper.</h2>\n\n  <div id="alert">\n\n    <ion-icon name="alert" id="alert-icon"></ion-icon>\n\n    <div id="alert-text">\n\n      <p>\n\n        <strong>Before you jump in, we need some info from you!</strong>\n\n      </p>\n\n    </div>\n\n  </div>\n\n\n\n  <form [formGroup]="formControl">\n\n    <ion-list id="text-fields">\n\n      <ion-input [hidden]="true"></ion-input>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Name</ion-label>\n\n        <ion-input type="text" maxlength="32" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Introduction</ion-label>\n\n        <ion-input type="text" maxlength="16" formControlName="intro"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Bio</ion-label>\n\n        <ion-input type="text" maxlength="64" formControlName="bio"></ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button class="button-margin" (click)="nextPage()" [disabled]="false">Next</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-details\signup-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SignupDetailsPage);
    return SignupDetailsPage;
}());

//# sourceMappingURL=signup-details.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_confirm_signup_confirm__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(67);
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
    SignupPicturePage.prototype.uploadPicture = function (event) {
        var _this = this;
        var file = event.target['files'].item(0);
        var self = this;
        if (!file)
            return; // When the user doesn't provide a file
        if (file.type.split('/')[0] == 'image') {
            this.imgProvider.open();
            this.imgProvider.uploadUserImage(file).then(function (snapshot) {
                snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    self.imageURL = downloadURL;
                });
                _this.imgProvider.close();
            });
        }
        else
            console.log("Not Image Type");
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
            selector: 'page-signup-picture',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-picture\signup-picture.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Choose a Picture</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n  <div id="heading-signup">\n\n    <ion-icon name="happy" id="heading-icon"></ion-icon>\n\n    <h2 id="heading-text">Hi {{this.name}}!</h2>\n\n  </div>\n\n\n\n  <p id="info-text">\n\n    <strong>We\'ve got all the data we need to get you started. If you want, you can add a picture to your profile!</strong>\n\n  </p>\n\n\n\n  <ion-grid text-center>\n\n    <ion-row nowrap>\n\n      <ion-col class="image-upload">\n\n        <label for="file-input">\n\n          <img src="{{this.imageURL}}" id="main-pic" class="user-picture">\n\n        </label>\n\n        <input type="file" id="file-input" (change)="uploadPicture($event)" accept="image/*">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-button id="next-button" (click)="nextPage()" [disabled]="false">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-picture\signup-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */]])
    ], SignupPicturePage);
    return SignupPicturePage;
}());

//# sourceMappingURL=signup-picture.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(159);
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
            selector: 'page-signup-confirm',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-confirm\signup-confirm.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Confirm Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div id="heading-signup">\n\n    <ion-icon name="alert" id="heading-icon"></ion-icon>\n\n    <h2 id="heading-text">Does this look right?</h2>\n\n  </div>\n\n\n\n  <ion-avatar>\n\n    <img src="{{this.imageURL}}" id="main-pic">\n\n  </ion-avatar>\n\n  <div text-center>\n\n    <p id="heading">{{name}}</p>\n\n    <p id="subtitle">{{intro}}</p>\n\n  </div>\n\n\n\n  <ion-grid>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-button (click)="confirmUser()">Confirm</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\signup\signup-confirm\signup-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], SignupConfirmPage);
    return SignupConfirmPage;
}());

//# sourceMappingURL=signup-confirm.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_groups_groups_list_groups_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_private_profile_private_profile__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_details_signup_details__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_picture_signup_picture__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_confirm_signup_confirm__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_groups_group_group__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_public_profile_public_profile__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_groups_create_group_create_group__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_group_edit_group__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_profile_edit_profile__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_adal_angular5__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_adal_angular5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_adal_angular5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_css_animator__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_azure_ad_azure_ad__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_loading_loading__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_image_image__ = __webpack_require__(67);
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
                __WEBPACK_IMPORTED_MODULE_25__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_groups_groups_list_groups_list__["a" /* GroupsListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                // AUXILIARY PAGES
                __WEBPACK_IMPORTED_MODULE_13__pages_groups_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_public_profile_public_profile__["a" /* PublicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23_css_animator__["AnimatesDirective"],
                // SIGNUP PAGES
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_details_signup_details__["a" /* SignupDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_picture_signup_picture__["a" /* SignupPicturePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_confirm_signup_confirm__["a" /* SignupConfirmPage */],
                // EDIT PAGES
                __WEBPACK_IMPORTED_MODULE_15__pages_groups_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // MAIN PAGES
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_groups_groups_list_groups_list__["a" /* GroupsListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                // AUXILIARY PAGES
                __WEBPACK_IMPORTED_MODULE_13__pages_groups_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_public_profile_public_profile__["a" /* PublicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                // SIGNUP PAGES
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup_details_signup_details__["a" /* SignupDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_picture_signup_picture__["a" /* SignupPicturePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup_confirm_signup_confirm__["a" /* SignupConfirmPage */],
                // EDIT PAGES
                __WEBPACK_IMPORTED_MODULE_15__pages_groups_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_group_edit_group__["a" /* EditGroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20_adal_angular5__["Adal5Service"],
                { provide: __WEBPACK_IMPORTED_MODULE_20_adal_angular5__["Adal5HTTPService"], useFactory: __WEBPACK_IMPORTED_MODULE_20_adal_angular5__["Adal5HTTPService"].factory, deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_20_adal_angular5__["Adal5Service"]] },
                __WEBPACK_IMPORTED_MODULE_23_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_24__providers_azure_ad_azure_ad__["a" /* AzureAdProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_image_image__["a" /* ImageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_azure_ad_azure_ad__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var firebaseConfig = {
    apiKey: "AIzaSyA-KRXx4OqCmLW9_JAV7mpBqrbLJwV56GA",
    authDomain: "grouper-swen325-2018.firebaseapp.com",
    databaseURL: "https://grouper-swen325-2018.firebaseio.com",
    projectId: "grouper-swen325-2018",
    storageBucket: "grouper-swen325-2018.appspot.com",
    messagingSenderId: "1001940929452"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, azure) {
        var _this = this;
        this.azure = azure;
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
        __WEBPACK_IMPORTED_MODULE_7_firebase__["initializeApp"](firebaseConfig);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureAdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular5__ = __webpack_require__(265);
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groups_group_group__ = __webpack_require__(92);
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
    function HomePage(toastCtrl, navCtrl, change, database, http) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.change = change;
        this.database = database;
        this.http = http;
        this.toSettingsPage = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
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
        var toast = this.toastCtrl.create({
            message: "You have blocked the group \"" + currentGroup.val().name + "\"!",
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.register = function () {
        var currentGroup = this.slide_data[(this.slides.getActiveIndex())];
        if (!currentGroup)
            return;
        if (this.slides.getActiveIndex() == (this.slide_data.length - 1))
            this.swipeLeft();
        this.database.addAsGroupMember(currentGroup.key);
        var toast = this.toastCtrl.create({
            message: "You were added to group \"" + currentGroup.val().name + "\"!",
            duration: 3000
        });
        toast.present();
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
            var toast = _this.toastCtrl.create({
                message: "\"" + text + "\" - " + data[0].title,
                duration: 3000
            });
            toast.present();
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
            _this.change.detectChanges(); // manually trigger change event as nothing else will
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button (click)="homeToast()">\n\n        <img src="assets/imgs/logo.png" class="home-icon">\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Home</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only [navPush]="toSettingsPage">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides id="slide" no-padding>\n\n    <ion-slide *ngIf="slide_data == undefined">\n\n      <ion-spinner></ion-spinner>\n\n      <p>Finding groups...</p>\n\n    </ion-slide>\n\n    <ion-slide *ngIf="slide_data?.length == 0">\n\n      <ion-icon name="sad" id="sad-face"></ion-icon>\n\n      <p>No groups to display!</p>\n\n    </ion-slide>\n\n    <ion-slide *ngFor="let slide_obj of slide_data" (click)="goToGroupProfile()">\n\n      <ion-avatar>\n\n        <img src="{{slide_obj.val().image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <p id="heading">{{slide_obj.val().name}}</p>\n\n      <p id="subtitle">{{slide_obj.val().category}}</p>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-grid id="grid" padding>\n\n    <ion-row nowrap>\n\n      <ion-col>\n\n        <button ion-fab round (click)="swipeLeft()" class="secbutton">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="reject()" class="main-btn">\n\n          <ion-icon name="close" class="main-btn_icon"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="register()" class="main-btn">\n\n          <ion-icon name="checkmark" class="main-btn_icon"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-fab round (click)="swipeRight()" class="secbutton">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function ImageProvider(http, loadingCtrl, azure) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.azure = azure;
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
    ImageProvider.prototype.uploadUserImage = function (file) {
        var image = this.azure.getUserID() + "." + file.type.split('/')[1], storageRef, parseUpload;
        return new Promise(function (resolve, reject) {
            storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('users/' + image);
            parseUpload = storageRef.put(file);
            parseUpload.on('state_changed', function () { }, function (error) { return reject(error); }, function () { return resolve(parseUpload.snapshot); });
        });
    };
    ImageProvider.prototype.uploadGroupImage = function (file) {
        var image = new Date().getTime() + "." + file.type.split('/')[1], storageRef, parseUpload;
        return new Promise(function (resolve, reject) {
            storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('groups/' + image);
            parseUpload = storageRef.put(file);
            parseUpload.on('state_changed', function () { }, function (error) { return reject(error); }, function () { return resolve(parseUpload.snapshot); });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__azure_ad_azure_ad__["a" /* AzureAdProvider */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(database) {
        this.database = database;
        this.groups = [];
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.database.getCurrentUser().then(function (r) {
            _this.name = r.val().name;
        });
        this.database.getAllGroups(function (snap) {
            snap.forEach(function (r) {
                if (_this.database.isInGroup(r.val().members)) {
                    _this.groups.push(r);
                }
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item>\n\n      <h2>My Details</h2>\n\n      <p>Hello {{this.name}}!</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Manage Groups</h2>\n\n      <p>You\'re in {{this.groups.length}} groups!</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Visual Preferences</h2>\n\n      <p>Change how the app looks</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_public_profile_public_profile__ = __webpack_require__(362);
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
    function GroupPage(navCtrl, navParams, toastCtrl, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.members = [];
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        this.category = this.navParams.get('category');
        this.description = this.navParams.get('description');
        this.image = this.navParams.get('image');
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
        var toast = this.toastCtrl.create({
            message: "You were added to group \"" + this.name + "\"!",
            duration: 3000
        });
        toast.present();
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
    GroupPage.prototype.isNotInGroup = function () {
        return !(this.database.isInGroup(this.navParams.get('members')));
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-group',template:/*ion-inline-start:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\group\group.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Group Profile</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only *ngIf="isNotInGroup()" (click)="register()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="{{this.image}}" id="main-pic">\n\n      </ion-avatar>\n\n      <div text-center>\n\n        <p id="heading">{{name}}</p>\n\n        <p id="subtitle">{{category}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item *ngIf=\'description != ""\' class="profile-item">\n\n      <div text-center>\n\n        <p class="subheading">Description</p>\n\n        <p>{{description}}</p>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div text-center>\n\n        <p class="subheading">Members</p>\n\n      </div>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-2 *ngFor="let member of members">\n\n            <ion-avatar item-start (click)="goToPublicProfile(member)">\n\n              <img src="{{member.image}}" class="group-img">\n\n            </ion-avatar>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Desktop\SWEN325\ionic-app\src\pages\groups\group\group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map