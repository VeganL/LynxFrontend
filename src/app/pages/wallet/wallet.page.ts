import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {CreateProfilePage} from '../../modals/create-profile/create-profile.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  profiles = [
    {
      name: 'Name M Last',
    },
    {
      name: 'Name Haha',
    },
    {
      name: 'Name baba',
    }
  ];

  constructor(private navController: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  async openCreateProfileModal(){
    const modal = await this.modalController.create({
      component: CreateProfilePage,
      componentProps: {
        type: 'createProfile'
      }
    });

    return await modal.present();
  }

  logout() {
    this.navController.navigateRoot('/login');
  }

}
