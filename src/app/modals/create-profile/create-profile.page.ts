import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
    });
  }

}
