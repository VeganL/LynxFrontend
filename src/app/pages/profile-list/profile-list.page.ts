import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

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

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  details() {
    this.navController.navigateRoot('/tabs/wallet/profile-list/card-detail');
  }

}
