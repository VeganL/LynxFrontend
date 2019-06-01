import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {CreateProfilePage} from "../../modals/create-profile/create-profile.page";
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

  searchVar: string;

  profileCards = [
    {
      name: 'Name M Last',
    },
    {
      name: 'Name Haha',
    },
    {
      name: 'Name baba',
    }
  ];

  profileCardsSearch = [];

  constructor(
      private navController: NavController,
      private modalController: ModalController,
  ) { }

  ngOnInit() {
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
