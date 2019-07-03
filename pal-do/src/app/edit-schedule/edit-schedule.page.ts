import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.page.html',
  styleUrls: ['./edit-schedule.page.scss'],
})
export class EditSchedulePage implements OnInit {

  @Input() title : string;
  @Input() descrption : string;
  @Input() date : string;


  constructor( private modalCtrl: ModalController,private navCtrl: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.navCtrl.navigateBack('/pal-do-schedule');
    this.modalCtrl.dismiss();
}


closePopover(){
  this.navCtrl.navigateBack('/pal-do-schedule');
  this.modalCtrl.dismiss();
}


updateschedule(){
  
}
}
