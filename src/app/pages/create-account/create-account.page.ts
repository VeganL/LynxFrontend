import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {AuthServiceService} from "../../services/auth-service/auth-service.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  username = 'Sofia';
  email = 'sct56@drexel.edu';
  password = '1234567890';

  constructor(
      private navController: NavController,
      private authServiceService: AuthServiceService,
      private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  async presentAlert(head, msg) {
    const alert = await this.alertController.create({
      header: head,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  signUp() {

    this.authServiceService.signUp(this.username, this.email, this.password).then(
        (data) => {
          this.navController.navigateRoot('/login');
        }, (err) => {
          console.error(err);
          this.presentAlert('Error', err);
        }
    );
  }

}
