import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalDoSignupPage } from './pal-do-signup.page';

const routes: Routes = [
  {
    path: '',
    component: PalDoSignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PalDoSignupPage]
})
export class PalDoSignupPageModule {}
