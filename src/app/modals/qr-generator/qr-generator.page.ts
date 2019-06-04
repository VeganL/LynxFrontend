import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage implements OnInit {

  qrData: string;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams
  ) {
    this.qrData = JSON.stringify(this.navParams.get('data'));
    console.log('QR Data', this.qrData);
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
    });
  }

}
