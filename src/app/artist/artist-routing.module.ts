import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistMainComponent } from './artist-main/artist-main.component';

const routes: Routes = [
  {
    path: ':id',
    component: ArtistMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
