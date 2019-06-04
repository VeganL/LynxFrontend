import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthServiceService } from '../../services/auth-service/auth-service.service';
import {UserDataService} from '../../services/user-data/user-data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = 'VeganL';
  password = 'fourwordsalluppercase';

  constructor(
      private navController: NavController,
      private authServiceService: AuthServiceService,
      private userDataService: UserDataService,
      private alertController: AlertController
  ) { }

  ngOnInit() {
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Incorrect Login',
            message: 'Incorrect Username or Password.',
            buttons: ['OK']
        });
        await alert.present();
  }

  login() {
    console.log(this.username, this.password);

    this.authServiceService.authentication(this.username, this.password).then(
        (data) => {
            this.userDataService.setUserData(data);

            console.log('User Data', data);
            this.navController.navigateRoot('/tabs/profiles');

        },
        (err) => {
            this.presentAlert();

        }
    );
  }

}
