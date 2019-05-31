import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

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

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navController.navigateRoot('/tabs/profiles/profile-list');
  }

}
