import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {CreateProfilePage} from '../../modals/create-profile/create-profile.page';
import {ActivatedRoute} from '@angular/router';
import {ProfileCardsService} from '../../services/profile-cards/profile-cards.service';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.page.html',
    styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

    searchVar: string;
    profileId;

    profileCards = [];

    profileCardsSearch = [];

    constructor(
        private navController: NavController,
        private modalController: ModalController,
        private route: ActivatedRoute,
        private profileCardsService: ProfileCardsService
    ) { }


    ngOnInit() {
        this.profileId = this.route.snapshot.paramMap.get('profile-id');
        this.profileCardsService.getProfileCards(this.profileId).then(
            (data) => {
                this.profileCards = data;
                console.log('Profile cards', data);
                this.initializeProfileCards();
            }, (err) => {
                console.error(err);
            }
        );
    }


    async openCreateProfileModal() {
        const modal = await this.modalController.create({
            component: CreateProfilePage,
            componentProps: {
                type: 'createCard',
                proId: this.profileId
            }
        });
        return await modal.present();
    }

    details() {
        this.navController.navigateForward('/tabs/profiles/card-detail');
    }


    initializeProfileCards() {
        this.profileCardsSearch = this.profileCards;
    }

    searchbar() {
        this.initializeProfileCards();

        console.log(this.searchVar);
        this.profileCardsSearch = this.profileCardsSearch.filter( (card) => {
            return card.name.toLocaleLowerCase().indexOf(this.searchVar.toLocaleLowerCase()) > -1;
        });
    }

}
