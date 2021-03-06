import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modal
import {CreateProfilePageModule} from './modals/create-profile/create-profile.module';
import {QrGeneratorPageModule} from './modals/qr-generator/qr-generator.module';
import {AcceptPageModule} from './modals/accept/accept.module';

// Services
import { AuthServiceService } from './services/auth-service/auth-service.service';
import { UserDataService} from './services/user-data/user-data.service';
import { ProfileService} from './services/profile/profile.service';
import { WalletService } from './services/wallet/wallet.service';

// Plugins
import { HTTP } from '@ionic-native/http/ngx';
import { QRCodeModule } from 'angular2-qrcode';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {Camera} from "@ionic-native/camera/ngx";
import {WebView} from "@ionic-native/ionic-webview/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CreateProfilePageModule,
    QrGeneratorPageModule,
    QRCodeModule,
    AcceptPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceService,
    UserDataService,
    ProfileService,
    WalletService,
    HTTP,
    QRScanner,
    Camera,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
