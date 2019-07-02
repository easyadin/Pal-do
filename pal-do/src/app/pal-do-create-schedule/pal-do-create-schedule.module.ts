import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalDoCreateSchedulePage } from './pal-do-create-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: PalDoCreateSchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PalDoCreateSchedulePage]
})
export class PalDoCreateSchedulePageModule {}
