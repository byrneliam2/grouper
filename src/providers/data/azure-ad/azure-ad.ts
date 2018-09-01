import { Injectable } from '@angular/core';
import { Adal5Service } from 'adal-angular5';

@Injectable()
export class AzureAdProvider {
  private config = {} // You didn't think we'd store our keys here, did you?

  constructor(private service: Adal5Service) {
  }

  // ========== User Information ========== \\

  public getUserID(): string {
    return this.service.userInfo.profile.oid;
  }

  public isAuthenticated(): boolean {
    return this.service.userInfo.authenticated;
  }

  // ========== Core Functionality ========== \\

  public initiateProvider() {
    this.service.init(this.config);
  }

  public handleCallback() {
    this.service.handleWindowCallback();
  }

  public login() {
    this.service.login();
  }

  public logout() {
    this.service.logOut();
  }

}
