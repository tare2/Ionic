import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviousChequesHistoryPage } from './previous-cheques-history.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousChequesHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreviousChequesHistoryPage]
})
export class PreviousChequesHistoryPageModule {}
