import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

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
    this.navController.navigateForward('/tabs/profiles/profile-list/accept-detail');
  }

}
