import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumMainComponent } from './album-main/album-main.component';

const routes: Routes = [
  {
    path: ':id',
    component: AlbumMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
