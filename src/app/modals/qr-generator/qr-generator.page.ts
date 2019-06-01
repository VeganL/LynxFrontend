import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage implements OnInit {

  qrData: string;

  constructor(
      private modalController: ModalController,
      private barcodeScanner: BarcodeScanner,
      private navParams: NavParams
  ) {
    this.qrData = this.navParams.get('data');
    console.log('QR Data', this.qrData);
  }

  ngOnInit() {
    this.generateQRcode();
  }

  closeModal() {
    this.modalController.dismiss({
    });
  }

  generateQRcode() {
      // this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.qrData).then(
      //     (data) => {
      //       console.log(data);
      //     }, (err) => {
      //       console.error(err);
      //     }
      // );
  }

}
