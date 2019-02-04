import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackingChequesPage } from './tracking-cheques.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingChequesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackingChequesPage]
})
export class TrackingChequesPageModule {}
