import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {QrGeneratorPage} from "../../modals/qr-generator/qr-generator.page";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {

  email = 'meme@meme.com';
  phone = '(123)123-1234';
  home = '123 Street, City, State, Country, ZipCode';
  website = 'www.mywebbie.com';

  constructor(
      private navController: NavController,
      private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async openCreateProfileModal(){
    const modal = await this.modalController.create({
      component: QrGeneratorPage,
      componentProps: {
        data: {
          email: this.email,
          phone: this.phone,
          home: this.home,
          website: this.website
        }
      }
    });

    return await modal.present();
  }

}
