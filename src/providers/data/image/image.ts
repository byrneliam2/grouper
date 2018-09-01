import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import * as firebase from 'firebase';

@Injectable()
export class ImageProvider {

  loading: Loading;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
  }

  open() {
    this.loading = this.loadingCtrl.create({
      content: "Uploading your image..."
    });
    this.loading.present();
  }

  close() {
    this.loading.dismiss();
  }


  // ========== Image Storage  ========== \\

  uploadPicture(file: File, type: string): Promise<any> {
    if (!file) return;
    if (file.type.split('/')[0] == 'image') {
      let image: string = `${new Date().getTime()}.${file.type.split('/')[1]}`,
        storageRef: any,
        parseUpload: any;

      return new Promise((resolve, reject) => {
        storageRef = firebase.storage().ref(type + '/' + image);
        parseUpload = storageRef.put(file);

        parseUpload.on('state_changed',
          () => { },
          (error) => reject(error),
          () => resolve(parseUpload.snapshot)
        );
      });
    }
  }
}
