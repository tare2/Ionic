import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgressChequesPage } from './progress-cheques.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressChequesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressChequesPage]
})
export class ProgressChequesPageModule {}
