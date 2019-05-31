import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthServiceService } from '../../services/auth-service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = 'VeganL';
  password = 'fourwordsalluppercasE';

  constructor(
      private navController: NavController,
      private authServiceService: AuthServiceService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username, this.password);

    // this.authServiceService.authentication(this.username, this.password);

    this.navController.navigateRoot('/tabs/wallet');
  }

}
