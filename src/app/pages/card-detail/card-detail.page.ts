import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {QrGeneratorPage} from '../../modals/qr-generator/qr-generator.page';
import {UserDataService} from '../../services/user-data/user-data.service';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {

  cardData: any;

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.cardData = this.userDataService.getCurrentSelectedCard();
  }


  async openCreateProfileModal() {
    const modal = await this.modalController.create({
      component: QrGeneratorPage,
      componentProps: {
        data: this.cardData
      }
    });

    return await modal.present();
  }

}
