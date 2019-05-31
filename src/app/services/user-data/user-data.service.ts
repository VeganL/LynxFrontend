import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData;

  constructor() { }

  getUserData() {
    return this.userData;
  }

  setUserData(newUserData) {
    this.userData = newUserData;
  }
}
