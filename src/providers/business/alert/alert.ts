import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  doToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  doAlert(title, message, noText, yesText, yesHandler) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: noText
        },
        {
          text: yesText,
          handler: yesHandler()
        }
      ]
    });
    alert.present();
  }

}
