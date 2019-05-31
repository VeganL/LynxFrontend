import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://lynx.lroy.us/cgi-bin/backend.py';

  constructor(private http: HTTP) { }


  authentication(userName, pass): Promise<{}> {

    return new Promise<{}>((resolve, reject) => {
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

}
