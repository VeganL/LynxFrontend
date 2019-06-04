import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrGeneratorPage } from './qr-generator.page';

import { QRCodeModule } from 'angular2-qrcode';


const routes: Routes = [
  {
    path: '',
    component: QrGeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    QRCodeModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}
