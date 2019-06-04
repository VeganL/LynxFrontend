import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, AlertController, ActionSheetController} from '@ionic/angular';
import {ProfileService} from '../../services/profile/profile.service';
import {UserDataService} from '../../services/user-data/user-data.service';
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import {WebView} from "@ionic-native/ionic-webview/ngx";


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  modalType: string;
  profileId: number;
  attributes: any;

  profileName: string;
  iconName = [];
  profileImage;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams,
      private profileService: ProfileService,
      private userDataService: UserDataService,
      public alertController: AlertController,
      private camera: Camera,
      private webview: WebView,
      private actionSheetController: ActionSheetController
  ) {
    this.modalType = this.navParams.get('type');
    this.profileId = this.navParams.get('proId');
    this.attributes = this.navParams.get('attrJson');

    for (const attr of this.attributes) {
      attr.display = !!(attr.icon_name || attr.photo || attr.name || attr.title);
    }
  }

  ngOnInit() {}


  closeModal() {
    this.modalController.dismiss({
    });
  }


  saveCreateProfile() {
    console.log('Save Profile');

    const accountId = this.userDataService.getUserData().account_id;
    const attributes = {
      icon_name: this.iconName[0],
      name: this.attributes[1].name,
      title: this.attributes[2].title,
      email: this.attributes[3].email,
      phone: this.attributes[4].phone,
      address: this.attributes[5].address,
      website: this.attributes[6].website,
      snapchat: this.attributes[7].snapchat,
      linkedin: this.attributes[8].linkedin,
      facebook: this.attributes[9].facebook
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

    const selectedAttrs = [];

    for (const attr of this.attributes) {
      if (attr.display) {
        selectedAttrs.push(attr.attribute_id);
      }
    }

    this.profileService.createCard(this.profileId, selectedAttrs).then(
        (data) => {
          console.log('Created card', data);
          this.closeModal();
        }, (err) => {
          this.presentAlert('Something wrong...', '', err);
        }
    );
  }


  displayField(attr) {
    console.log('Clicked!!');

    if (this.modalType === 'createProfile') {
      return;
    }

    attr.display = !attr.display;
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

  /**
   * Allow users to select photo source
   */
  async choosePictureSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Photo Option',
      buttons: [{
        text: 'Gallery',
        icon: 'albums',
        handler: () => {
          this.capture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.capture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    await actionSheet.present();
  }


  /**
   * Handles image picker and camera
   *
   * @param type source type
   */
  capture(type) {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: true,
      correctOrientation: true
    };

    this.camera.getPicture(cameraOptions)
        .then((imageData) => {


          /* to display image */
          this.profileImage = this.webview.convertFileSrc(imageData);

          console.log('imagePath', imageData);

        }).catch((err) => {
      this.presentAlert('Error', '', err).then();
    });
  }

}
