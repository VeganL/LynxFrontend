import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {CreateProfilePage} from "../../modals/create-profile/create-profile.page";
import { UserDataService } from '../../services/user-data/user-data.service';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

  searchVar: string;

  profileCards = [];

  profileCardsSearch = [];

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.profileCards = this.userDataService.getUserData().profiles;
    this.initializeProfileCards();
  }


  async openCreateProfileModal() {
    const modal = await this.modalController.create({
      component: CreateProfilePage,
      componentProps: {
        type: 'createCard'
      }
    });
    return await modal.present();
  }

  details() {
    this.navController.navigateForward('/tabs/profiles/card-detail');
  }


  initializeProfileCards() {
    this.profileCardsSearch = this.profileCards;
  }

  searchbar() {
    this.initializeProfileCards();

    console.log(this.searchVar);
    this.profileCardsSearch = this.profileCardsSearch.filter( (card) => {
      return card.name.toLocaleLowerCase().indexOf(this.searchVar.toLocaleLowerCase()) > -1;
    });
  }

}
