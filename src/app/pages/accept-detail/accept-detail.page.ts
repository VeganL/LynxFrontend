import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-accept-detail',
  templateUrl: './accept-detail.page.html',
  styleUrls: ['./accept-detail.page.scss'],
})
export class AcceptDetailPage implements OnInit {

  email = 'meme@meme.com';
  phone = '(123)123-1234';
  home = '123 Street, City, State, Country, ZipCode';
  website = 'www.mywebbie.com';

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  wallet(){
    this.navController.navigateRoot('/tabs/wallet/profile-list');
  }
}
