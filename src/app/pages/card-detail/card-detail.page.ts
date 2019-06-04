import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {QrGeneratorPage} from '../../modals/qr-generator/qr-generator.page';
import {ProfileCardsService} from '../../services/profile-cards/profile-cards.service';

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

  attributes: any;
  attributesSearch: [];

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private route: ActivatedRoute,
      private profileCardsService: ProfileCardsService
  ) { }

  ngOnInit() {
    this.attributes = this.route.snapshot.paramMap.get('attributes');
    console.log('Attribute', this.attributes);
    this.initializeAttributes();
  }

  initializeAttributes() {
    this.attributesSearch = this.attributes;
  }

  async openCreateProfileModal() {
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
