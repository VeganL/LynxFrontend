import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
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

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.initializeProfileCards();
  }

  details() {
    this.navController.navigateForward('/tabs/profiles/profile-list/card-detail');
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
