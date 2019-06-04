import { Component, OnInit } from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {ProfileCardsService} from "../../services/profile-cards/profile-cards.service";
import {UserDataService} from "../../services/user-data/user-data.service";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.page.html',
  styleUrls: ['./accept.page.scss'],
})
export class AcceptPage implements OnInit {

  qrData;

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private profileCardsService: ProfileCardsService,
      private userDataService: UserDataService,
      private navParams: NavParams
  ) {
    this.qrData = this.navParams.get('qrData');
  }

  ngOnInit() {
  }

  goToWalletPage() {
    this.navController.navigateRoot('/tabs/wallet');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  accept() {
    this.profileCardsService.acceptWalletCards(this.qrData.card_id, this.userDataService.getUserData().account_id).then(
        (res) => {

          this.goToWalletPage();

        }, (err) => {
          console.error(err);
        }
    )
  }
}
