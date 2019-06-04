import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData;
  private currentSelectedProfile;
  private currentSelectedCard;

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

  getCurrentSelectedCard() {
    return this.currentSelectedCard;
  }

  setCurrentSelectedCard(selectedCard) {
    this.currentSelectedCard = selectedCard;
  }
}
