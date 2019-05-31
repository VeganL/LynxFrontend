import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  profileCards = [
    {
      icon: 'person',
      name: 'Personal',
    },
    {
      icon: 'bowtie',
      name: 'Professional',
    },
    {
      icon: 'color-palette',
      name: 'Art',
    },
    {
      icon: 'briefcase',
      name: 'Work'
    }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  details() {
    this.navController.navigateForward('/tabs/profiles/profile-list/accept-detail');
  }

}
