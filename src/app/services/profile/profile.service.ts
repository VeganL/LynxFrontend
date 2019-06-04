import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://lynx.lroy.us/cgi-bin/backend.py';

  constructor(private http: HTTP) { }

  createProfile(accId, profileName, attributes): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      const body = {
        type: 'insert_profile',
        account_id: accId,
        profile_name_json: profileName,
        attributes_json: attributes
      };

      this.http.post(this.url, body, headers).then(
          (success) => {
            if (success.status === 200) {
              console.log(success);
              const data = JSON.parse(success.data);

              if (data.err) {
                reject(data.err);
              } else {
                resolve(data);
              }
            }
          },
          (err) => {
            console.error(err);
          }
      );
    });
  }



  createCard(profileId, attrJson): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      console.log('Profile Id', profileId);
      console.log('attr', attrJson);

      const body = {
        type: 'insert_profile_card',
        profile_id: profileId,
        attr_json_array: JSON.stringify(attrJson)
      };

      this.http.setDataSerializer('urlencoded');

      this.http.post(this.url, body, headers).then(
          (success) => {
            if (success.status === 200) {
              console.log(success.data);
              const data = JSON.parse(success.data);

              if (data.err) {
                reject(data.err);
              } else {
                resolve(data);
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
