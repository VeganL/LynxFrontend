import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, AlertController} from '@ionic/angular';
import {ProfileService} from '../../services/profile/profile.service';
import {UserDataService} from '../../services/user-data/user-data.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  modalType: string;

  profileName: string;
  iconName = [];
  name: string;
  title: string;
  email = {
    value: '',
    display: true
  };
  phone = {
    value: '',
    display: true
  };
  address = {
    value: '',
    display: true
  };
  website = {
    value: '',
    display: true
  };
  snapchat = {
    value: '',
    display: true
  };
  facebook = {
    value: '',
    display: true
  };
  linkedIn = {
    value: '',
    display: true
  };

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
      private profileService: ProfileService,
      private userDataService: UserDataService,
      public alertController: AlertController
  ) {
    this.modalType = this.navParams.get('type');
  }

  ngOnInit() {}


  closeModal() {
    this.modalController.dismiss({
    });
  }


  saveCreateProfile() {
    console.log('Save Profile');
    console.log(this.profileName, this.iconName, this.name, this.title,
        this.email, this.phone, this.address, this.website,
        this.snapchat, this.linkedIn, this.facebook);

    const accountId = this.userDataService.getUserData().account_id;
    const attributes = {
      icon_name: this.iconName[0],
      name: this.name,
      title: this.title,
      email: this.email,
      phone: this.phone,
      website: this.website,
      snapchat: this.snapchat,
      linkedin: this.linkedIn,
      facebook: this.facebook
    };

    this.profileService.createProfile(accountId, JSON.stringify({profile_name: this.profileName}), JSON.stringify(attributes)).then(
        (success) => {
          this.closeModal();
        }, (err) => {
            this.presentAlert('Something wrong...', '', err);
        }
    );
  }


  saveCreateCard() {
    console.log('Save Card');
  }


  displayField(field) {
    console.log('Clicked!!');

    if (this.modalType === 'createProfile') {
      return;
    }

    if (field === 'email') {
      this.email.display = (!this.email.display);
    } else if (field === 'phone') {
      this.phone.display = (!this.phone.display);
    } else if (field === 'address') {
      this.address.display = (!this.address.display);
    } else if (field === 'website') {
      this.website.display = (!this.website.display);
    } else if (field === 'snapchat') {
      this.snapchat.display = (!this.snapchat.display);
    } else if (field === 'linkedIn') {
      this.linkedIn.display = (!this.linkedIn.display);
    } else if (field === 'facebook') {
      this.facebook.display = (!this.facebook.display);
    }
  }


  async presentAlert(hd, sub, msg) {
    const alert = await this.alertController.create({
      header: hd,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
