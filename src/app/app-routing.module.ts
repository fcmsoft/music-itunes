import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'artist',
    loadChildren: './artist/artist.module#ArtistModule'
  },
  {
    path: 'album',
    loadChildren: './album/album.module#AlbumModule'
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
