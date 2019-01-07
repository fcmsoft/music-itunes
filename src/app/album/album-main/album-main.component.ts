import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

interface Song {
  trackName: string;
  trackNumber: number;
}

interface Album {
  collectionId: number;
  collectionName: string;
  artistName: string;
  country: string;
  releaseDate: Date;
  artworkUrl100: string;
  songs: Array<Song>;
}

@Component({
  selector: 'app-album-main',
  templateUrl: './album-main.component.html',
  styleUrls: ['./album-main.component.scss']
})
export class AlbumMainComponent implements OnInit, OnDestroy {


  public albumData$: Observable<Album>;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.albumData$ = this.albumService.getAlbum(id).pipe(
        map(result => {
            const album = {
              collectionId: result.results[0].collectionId,
              collectionName: result.results[0].collectionName,
              artistName: result.results[0].artistName,
              country: result.results[0].country,
              releaseDate: result.results[0].releaseDate,
              artworkUrl100: result.results[0].artworkUrl100,
              songs: []
            };
            result.results.shift();
            album.songs = result.results;
            return album;
          })
      );
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

}
