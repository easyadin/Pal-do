import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController,NavController } from'@ionic/angular';

@Component({
  selector: 'app-pal-do-create-schedule',
  templateUrl: './pal-do-create-schedule.page.html',
  styleUrls: ['./pal-do-create-schedule.page.scss'],
})
export class PalDoCreateSchedulePage implements OnInit {

title: string;
description: string;
date: string;
owner: string;



  constructor( private navCtrl:NavController, private toastCtrl: ToastController ) {
    this.owner = firebase.auth().currentUser.uid;
   }

  ngOnInit() {
  }

//add schedule function
  add_schedule(){
    firebase.firestore().collection("schedules").add({
      title: this.title,
      description: this.description,
      date: new Date(this.date),
      owner: this.owner,
      status:"incomplete",
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(docRef => {
      console.log(docRef);
            this.toastCtrl.create({
              message: "new Schedule added",
              duration: 2000
            }).then(toast =>{
              toast.present();
              this.navCtrl.back();
            });
    }).catch(e =>{
        this.toastCtrl.create({
          message: e.message,
          duration:2000
        }).then(toast =>{
          toast.present();
        });
    });
  }
}
