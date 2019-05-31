import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthServiceService } from '../../services/auth-service/auth-service.service';
import {UserDataService} from "../../services/user-data/user-data.service";


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
      private userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username, this.password);

    this.authServiceService.authentication(this.username, this.password).then(
        (data) => {
            this.userDataService.setUserData(data);

          console.log('User Data', data);
          this.navController.navigateRoot('/tabs/wallet');

        },
        (err) => {

        }
    );
  }

}
