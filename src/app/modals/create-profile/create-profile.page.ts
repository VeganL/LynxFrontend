import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  modalType: string;

  profile: string;
  select = [];
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
      private navParams: NavParams
  ) {
    this.modalType = this.navParams.get('type');
  }

  ngOnInit() {
  }


  closeModal() {
    this.modalController.dismiss({
    });
  }


  saveCreateProfile() {
    console.log('Save Profile');
    console.log(this.profile, this.select, this.name, this.title,
        this.email, this.phone, this.address, this.website,
        this.snapchat, this.linkedIn, this.facebook);
  }


  saveCreateCard() {
    console.log('Save Card');
  }


  displayField(field) {
    console.log('Clicked!!');
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

}
