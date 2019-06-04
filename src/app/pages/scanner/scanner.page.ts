import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {CreateProfilePage} from "../../modals/create-profile/create-profile.page";
import {AcceptPage} from "../../modals/accept/accept.page";
import {Subscription} from "rxjs";
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  isOn = false;
  scannerSub;

  isLightOn = false;
  camera = 0;

  private subscription: Subscription;

  constructor(
      public alertController: AlertController,
      private qrScanner: QRScanner,
      private modalController: ModalController,
      private router: Router
  ) {}

  ngOnInit(): void {
    /*
 * since ionViewWillEnter only trigger once on tab router.
 * This is a way around it.
 * Subscribe to router.
 */
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/tabs') {
        this.ionViewWillEnter();
      }
    });
  }

  /**
   * ionic life cycle
   */
  ionViewWillEnter() {
    this.startScanner();
  }

  /**
   * ionic life cycle
   */
  ionViewWillLeave() {
    this.stopScanner();
    this.destroyScanner();
  }


  startScanner() {
    this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {

            this.isOn = true;

            /* start scanning */
            this.scannerSub = this.qrScanner.scan().subscribe((data: any) => {
              console.log('QR Data', data);
              // this.presentAlert('Data', '', data).then(() => {
              //   this.startScanner();
              // });
              this.openAcceptModal(data);
            });

            this.qrScanner.show().then();


          } else if (status.denied) {
            // camera permission was permanently denied
            this.presentAlertConfirm().then();

          } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        })
        .catch((e: any) => {
          console.log('Error is', e);

          if (e.code === 1) {
            this.presentAlertConfirm().then();
          } else {
            this.presentAlert('Alert', e.name, e._message).then();
          }
        });
  }


  stopScanner() {
    this.isOn = false;
    this.qrScanner.hide().then();
    this.scannerSub.unsubscribe();
  }


  destroyScanner() {
    this.qrScanner.destroy().then();
  }


  reverseCamera() {
    this.camera = (this.camera === 0) ? 1 : 0;
    this.qrScanner.useCamera(this.camera).then();
  }


  enableLight() {
    this.isLightOn = true;
    this.qrScanner.enableLight().then();
  }


  disableLight() {
    this.isLightOn = false;
    this.qrScanner.disableLight().then();
  }


  openSettings() {
    /* go to phone settings */
    this.qrScanner.openSettings();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Permission',
      message: 'Make sure you enable camera access in your settings in order to use QR Code scanner',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Go To Settings',
          handler: () => {
            this.openSettings();
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async openAcceptModal(scannedData) {
    const modal = await this.modalController.create({
      component: AcceptPage,
      componentProps: {
        qrData: scannedData
      }
    });

    this.disableLight();
    await modal.present();

    /* restart scanner after modal is dismiss */
    const { data } = await modal.onDidDismiss();

    if ( data === null || data === undefined ) {
      this.startScanner();
    } else {
      this.ionViewWillLeave();
    }
  }
}
