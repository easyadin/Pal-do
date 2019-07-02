import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalDoSchedulePage } from './pal-do-schedule.page';
import { ViewScheduleComponent } from '../view-schedule/view-schedule.component';



const routes: Routes = [
  {
    path: '',
    component: PalDoSchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[ViewScheduleComponent],
  declarations: [PalDoSchedulePage,ViewScheduleComponent]
})
export class PalDoSchedulePageModule {}
