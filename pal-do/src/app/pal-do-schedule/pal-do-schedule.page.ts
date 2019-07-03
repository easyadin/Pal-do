import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController,NavController,ModalController } from "@ionic/angular";
import { EditSchedulePage } from '../edit-schedule/edit-schedule.page';

@Component({
  selector: 'app-pal-do-schedule',
  templateUrl: './pal-do-schedule.page.html',
  styleUrls: ['./pal-do-schedule.page.scss'],
})
export class PalDoSchedulePage implements OnInit {

  userId:string;
  schedules: any[] = [];

  public title;


  private show:boolean = false;

  constructor(private navCtrl: NavController, 
    private toastCtrl: ToastController,
    private modalCtrl: ModalController) {
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
     this.title = schedule.data().title;
    const modal = await this.modalCtrl.create({
      component: EditSchedulePage,
      componentProps: {
        'title':schedule.data().title,
        'description': schedule.data().description,
        'date': schedule.data().date
      }
    });

     console.log(this.title); // remove this <--

      return await modal.present();
      }


    
  
}
