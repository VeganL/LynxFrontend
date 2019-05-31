import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.page.html',
  styleUrls: ['./accept.page.scss'],
})
export class AcceptPage implements OnInit {

  email = 'meme@meme.com';
  phone = '(123)123-1234';
  home = '123 Street, City, State, Country, ZipCode';
  website = 'www.mywebbie.com';

  constructor(private navController: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  wallet() {
    this.navController.navigateRoot('/tabs/profiles/profile-list');
  }

  closeModal() {
    this.modalController.dismiss({
    });
  }
}
