import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cheques', loadChildren: './cheques/cheques.module#ChequesPageModule' },
  { path: 'add-cheques', loadChildren: './add-cheques/add-cheques.module#AddChequesPageModule' },
  { path: 'previous-cheques-history', loadChildren: './previous-cheques-history/previous-cheques-history.module#PreviousChequesHistoryPageModule' },
  { path: 'progress-cheques', loadChildren: './progress-cheques/progress-cheques.module#ProgressChequesPageModule' },
  { path: 'secound-home', loadChildren: './secound-home/secound-home.module#SecoundHomePageModule' },
  { path: 'tracking-cheques', loadChildren: './tracking-cheques/tracking-cheques.module#TrackingChequesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
