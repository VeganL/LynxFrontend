import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData;
  private currentSelectedProfile;


  constructor() { }

  getUserData() {
    return this.userData;
  }

  setUserData(newUserData) {
    this.userData = newUserData;
  }


  getCurrentSelectedProfile() {
    return this.currentSelectedProfile;
  }

  setcurrentSelectedProfile(currentProfile) {
    this.currentSelectedProfile = currentProfile;
  }
}
