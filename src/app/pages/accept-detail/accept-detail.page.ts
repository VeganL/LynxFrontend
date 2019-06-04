import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {UserDataService} from "../../services/user-data/user-data.service";
import {QrGeneratorPage} from "../../modals/qr-generator/qr-generator.page";

@Component({
  selector: 'app-accept-detail',
  templateUrl: './accept-detail.page.html',
  styleUrls: ['./accept-detail.page.scss'],
})
export class AcceptDetailPage implements OnInit {

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
