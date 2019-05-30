import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  profile: string;
  select = [];
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  snapchat: string;
  facebook: string;
  linkedIn: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  saveModal() {
    console.log(this.profile, this.select, this.name, this.title,
        this.email, this.phone, this.address, this.website,
        this.snapchat, this.linkedIn, this.facebook);
  }

  closeModal() {
    this.modalController.dismiss({
    });
  }

}
