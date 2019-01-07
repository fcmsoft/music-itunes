import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

interface Album {
  artworkUrl100: string;
  collectionName: string;
  country: string;
  releaseDate: Date;
  collectionId: number;
}

interface Artist {
  id: number;
  name: string;
  genre: string;
  albums: Array<Album>;
}

@Component({
  selector: 'app-artist-main',
  templateUrl: './artist-main.component.html',
  styleUrls: ['./artist-main.component.scss']
})
export class ArtistMainComponent implements OnInit, OnDestroy {

  public artistData$: Observable<Artist>;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.artistData$ = this.artistService.getArtist(id).pipe(
        map(result => {
            const artist = {
              id: result.results[0].artistId,
              name: result.results[0].artistName,
              genre: result.results[0].primaryGenreName,
              albums: []
            };
            result.results.shift();
            artist.albums = result.results;
            return artist;
          })
      );
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
}
