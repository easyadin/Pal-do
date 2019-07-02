import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController,NavController } from "@ionic/angular";
@Component({
  selector: 'app-pal-do-signup',
  templateUrl: './pal-do-signup.page.html',
  styleUrls: ['./pal-do-signup.page.scss'],
})
export class PalDoSignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  signup(){
  firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
  .then((data) =>{
  console.log(data.user.email);
  this.navCtrl.navigateForward("/pal-do-schedule");
}).catch(e =>{
      this.toastCtrl.create( {
        message: e.message,
        duration: 3000
      }).then(toast =>{
        toast.present();
      })
})
  }


  gotoLogin(){
    this.navCtrl.back();
  }

}
