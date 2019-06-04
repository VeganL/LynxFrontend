import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {WalletService} from "../../services/wallet/wallet.service";
import {UserDataService} from "../../services/user-data/user-data.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  walletCards = [];

  constructor(
      private navController: NavController,
      private walletService: WalletService,
      private userDataService: UserDataService,
  ) { }

  ngOnInit() {
    this.walletService.getWalletCards(this.userDataService.getUserData().account_id).then(
        (data) => {
          this.walletCards = data;
        }, (err) => {
          console.error(err);
        }
    );
  }

  details(card) {
    this.userDataService.setCurrentSelectedCard(card);
    this.navController.navigateForward('/tabs/wallet/accept-detail');
  }

}
