import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://lynx.lroy.us/cgi-bin/backend.py';

  constructor(private http: HTTP) { }


  authentication(userName, pass) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    const body = {
      type: 'login',
      username: userName,
      password: pass
    };

    this.http.post(this.url, body, headers).then(
        (success) => {
          console.log('Success', success);
        },
        (err) => {
          console.error(err);
        }
    );
  }

}
