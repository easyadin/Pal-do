import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController,NavController } from "@ionic/angular";
@Component({
  selector: 'app-pal-do-login',
  templateUrl: './pal-do-login.page.html',
  styleUrls: ['./pal-do-login.page.scss'],
})
export class PalDoLoginPage implements OnInit {
email: string;
password: string;

constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

  this.userLoggedInState();
 }

  ngOnInit() {
  }


gotoSignup(){
  this.navCtrl.navigateForward("/pal-do-signup")
}

userLoggedInState(){
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      this.navCtrl.navigateForward("/pal-do-schedule")
    }else{
      // user data doesnt exist
    }
    
  })
}
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password)
    .then( data =>{
        console.log(data.user.email);
        this.navCtrl.navigateForward("pal-do-schedule");
    }).catch( err =>{
     this.toastCtrl.create({
       message:err.message,
       duration:3000
     }).then(toast =>{
       toast.present();
     })
    })
  }
}
