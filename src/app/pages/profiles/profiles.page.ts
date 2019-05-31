import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {CreateProfilePage} from '../../modals/create-profile/create-profile.page';
import {UserDataService} from "../../services/user-data/user-data.service";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  profiles: any;

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.profiles = this.userDataService.getUserData().profiles;
    console.log('Profile', this.profiles);
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
