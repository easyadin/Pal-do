import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalDoLoginPage } from './pal-do-login.page';

const routes: Routes = [
  {
    path: '',
    component: PalDoLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PalDoLoginPage]
})
export class PalDoLoginPageModule {}
