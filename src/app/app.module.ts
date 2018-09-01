import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { LoadingPage } from '../pages/loading/loading';
import { HomePage } from '../pages/home/home';
import { GroupsListPage } from '../pages/groups/groups-list/groups-list';
import { PrivateProfilePage } from '../pages/profile/private-profile/private-profile';
import { SettingsMainPage } from '../pages/settings/settings-main/settings-main';
import { TabsPage } from '../pages/tabs/tabs';

import { SignupDetailsPage } from '../pages/signup/signup-details/signup-details';
import { SignupPicturePage } from '../pages/signup/signup-picture/signup-picture';
import { SignupConfirmPage } from '../pages/signup/signup-confirm/signup-confirm';

import { GroupPage } from '../pages/groups/group/group';
import { PublicProfilePage } from '../pages/profile/public-profile/public-profile';
import { CreateGroupPage } from '../pages/groups/create-group/create-group';
import { EditGroupPage } from '../pages/edit/edit-group/edit-group';
import { EditProfilePage } from '../pages/edit/edit-profile/edit-profile';
import { PostPage } from '../pages/groups/post/post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Adal5Service, Adal5HTTPService } from 'adal-angular5';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AnimationService, AnimatesDirective } from 'css-animator';
import { AzureAdProvider } from '../providers/data/azure-ad/azure-ad';
import { DatabaseProvider } from '../providers/data/database/database';
import { ImageProvider } from '../providers/data/image/image';
import { ResourcesProvider } from '../providers/business/resources/resources';
import { EditorProvider } from '../providers/business/editor/editor';
import { AlertProvider } from '../providers/business/alert/alert';
import { FirebaseConfig } from '../providers/data/firebase-config';
import { ManageAccountPage } from '../pages/settings/manage-account/manage-account';
import { ManageGroupsPage } from '../pages/settings/manage-groups/manage-groups';

@NgModule({
  declarations: [
    MyApp,
    // MAIN PAGES
    LoginPage,
    LoadingPage,
    HomePage,
    GroupsListPage,
    PrivateProfilePage,
    TabsPage,
    // AUXILIARY PAGES
    GroupPage,
    PublicProfilePage,
    PostPage,
    AnimatesDirective,
    // SETTINGS PAGES
    SettingsMainPage,
    ManageAccountPage,
    ManageGroupsPage,
    // SIGNUP PAGES
    SignupDetailsPage,
    SignupPicturePage,
    SignupConfirmPage,
    // EDIT PAGES
    CreateGroupPage,
    EditGroupPage,
    EditProfilePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // MAIN PAGES
    LoginPage,
    LoadingPage,
    HomePage,
    GroupsListPage,
    PrivateProfilePage,
    TabsPage,
    // AUXILIARY PAGES
    GroupPage,
    PublicProfilePage,
    PostPage,
    // SETTINGS PAGES
    SettingsMainPage,
    ManageAccountPage,
    ManageGroupsPage,
    // SIGNUP PAGES
    SignupDetailsPage,
    SignupPicturePage,
    SignupConfirmPage,
    // EDIT PAGES
    CreateGroupPage,
    EditGroupPage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Adal5Service,
    { provide: Adal5HTTPService, useFactory: Adal5HTTPService.factory, deps: [HttpClient, Adal5Service] },
    AnimationService,
    AzureAdProvider,
    DatabaseProvider,
    ImageProvider,
    ResourcesProvider,
    EditorProvider,
    AlertProvider,
    FirebaseConfig
  ]
})
export class AppModule { }
