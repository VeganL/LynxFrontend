import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
    providedIn: 'root'
})
export class ProfileCardsService {

    url = 'http://lynx.lroy.us/cgi-bin/backend.py';

    constructor(
        private http: HTTP
    ) { }

    getProfileCards(profId): Promise<[]> {
        return new Promise<[]>((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            console.log('Progile id', profId);

            const body = {
                type : 'get_profile_cards',
                profile_id : profId
            };

            this.http.post(this.url, body, headers).then(
                (success) => {
                    if (success.status === 200) {
                        console.log(success);
                        const data = JSON.parse(success.data);

                        if (data.err) {
                            reject(data.err);
                        } else {
                            resolve(data.profile_cards);
                        }
                    }
                },
                (err) => {
                    console.error(err);
                }
            );
        });

    }

    acceptWalletCards(cardId, acctId): Promise<[]> {
        return new Promise<[]>((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            const body = {
                type : 'add_card_wallet_conf',
                card_id : cardId,
                account_id: acctId
            };

            this.http.post(this.url, body, headers).then(
                (success) => {
                    if (success.status === 200) {
                        console.log(success);
                        const data = JSON.parse(success.data);

                        if (data.err) {
                            reject(data.err);
                        } else {
                            resolve(data.profile_cards);
                        }
                    }
                },
                (err) => {
                    console.error(err);
                }
            );
        });

    }
}




