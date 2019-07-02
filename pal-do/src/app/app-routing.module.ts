import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pal-do-login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pal-do-signup', loadChildren: './pal-do-signup/pal-do-signup.module#PalDoSignupPageModule' },
  { path: 'pal-do-login', loadChildren: './pal-do-login/pal-do-login.module#PalDoLoginPageModule' },
  { path: 'pal-do-schedule', loadChildren: './pal-do-schedule/pal-do-schedule.module#PalDoSchedulePageModule' },
  { path: 'pal-do-create-schedule', loadChildren: './pal-do-create-schedule/pal-do-create-schedule.module#PalDoCreateSchedulePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
