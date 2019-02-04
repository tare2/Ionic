import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-add-cheques',
  templateUrl: './add-cheques.page.html',
  styleUrls: ['./add-cheques.page.scss'],
})
export class AddChequesPage {

  constructor(public alertController: AlertController) {}


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'A new Cheque is added',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}

