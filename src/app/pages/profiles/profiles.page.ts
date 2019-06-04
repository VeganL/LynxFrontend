import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {CreateProfilePage} from '../../modals/create-profile/create-profile.page';
import {UserDataService} from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  searchVar: string;

  profiles: any;

  profileSearch = [];

  constructor(
      private navController: NavController,
      private modalController: ModalController,
      private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.profiles = this.userDataService.getUserData().profiles;
    console.log('Profile', this.profiles);
    this.initializeProfiles();
  }

  initializeProfiles() {
    this.profileSearch = this.profiles;
  }

  async openCreateProfileModal() {
    const modal = await this.modalController.create({
      component: CreateProfilePage,
      componentProps: {
        type: 'createProfile',
        proId: '',
        attrJson: [
          {
            attribute_id: 1,
            icon_name: ''
          },
          {
            attribute_id: 2,
            photo: ''
          },
          {
            attribute_id: 3,
            name: ''
          },
          {
            attribute_id: 4,
            title: ''
          },
          {
            attribute_id: 5,
            email: ''
          },
          {
            attribute_id: 6,
            phone: ''
          },
          {
            attribute_id: 7,
            address: ''
          },
          {
            attribute_id: 8,
            website: ''
          },
          {
            attribute_id: 9,
            snapchat: ''
          },
          {
            attribute_id: 10,
            linkedin: ''
          },
          {
            attribute_id: 11,
            facebook: ''
          }
        ]
      }
    });

    return await modal.present();
  }

  logout() {
    this.navController.navigateRoot('/login');
  }

  details(profile) {
    this.userDataService.setcurrentSelectedProfile(profile);
    this.navController.navigateForward('/tabs/profiles/profile-list/' + profile.profile_id);
  }

  searchbar() {
    this.initializeProfiles();

    console.log(this.searchVar);
    this.profileSearch = this.profileSearch.filter((card) => {
      return card.profile_name.toLocaleLowerCase().indexOf(this.searchVar.toLocaleLowerCase()) > -1;
    });
  }

}
