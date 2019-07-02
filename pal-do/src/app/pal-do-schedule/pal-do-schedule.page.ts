import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController,NavController,PopoverController, NavParams } from "@ionic/angular";
import { ViewScheduleComponent } from '../view-schedule/view-schedule.component';

@Component({
  selector: 'app-pal-do-schedule',
  templateUrl: './pal-do-schedule.page.html',
  styleUrls: ['./pal-do-schedule.page.scss'],
})
export class PalDoSchedulePage implements OnInit {

  userId:string;
  schedules: any[] = [];

  private show:boolean = false;

  constructor(private navCtrl: NavController, 
    private toastCtrl: ToastController,
    private popOverCtrl:PopoverController,
    private navParams: NavParams) {
    this.userId = firebase.auth().currentUser.uid;
    this.getSchedule();
   }


  ngOnInit() {
  }

  //retrieve schedule created by user
  getSchedule(){
    firebase.firestore().collection("schedules")
    .where("owner", "==", this.userId)
    .where("status", "==","incomplete")
    .onSnapshot(querySnapshot =>{
      this.schedules = querySnapshot.docs;
    });
  }

  getDate(timestamp: firebase.firestore.Timestamp){
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  }

  gotoAddSchedule(){
    this.navCtrl.navigateForward("/pal-do-create-schedule");
  }

  markCompleted(document: firebase.firestore.QueryDocumentSnapshot){
      firebase.firestore().collection("schedules").doc(document.id).set(
        {
        "status":"completed"
      },{
        merge:true
      }).then(() => {
        this.toastCtrl.create({
          message:"Schedule marked as completed",
          duration:2000
        }).then(toast =>{
          toast.present();
        });
      });
  }


  async popupSchedule(schedule){
    const popover = await this.popOverCtrl.create({
      component: ViewScheduleComponent,    
      componentProps:{schedule}
    });
    return await popover.present();
  }

    
  
}
