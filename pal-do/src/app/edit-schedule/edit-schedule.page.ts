import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalController, NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.page.html',
  styleUrls: ['./edit-schedule.page.scss'],
})
export class EditSchedulePage implements OnInit {

  @Input() title : string;
  @Input() descrption : string;
  @Input() date : string;

  constructor( private modalCtrl: ModalController,private navCtrl: NavController,
    private elementRef: ElementRef) {
     
     }

  ngOnInit() {}

  dismiss() {
    this.navCtrl.navigateBack('/pal-do-schedule');
    this.modalCtrl.dismiss();
}


closePopover(){
  this.navCtrl.navigateBack('/pal-do-schedule');
  this.modalCtrl.dismiss();
}


getDate(timestamp){
  const date = timestamp.toDate();
  return date.toLocaleDateString();
}



updateschedule(){
}




}
