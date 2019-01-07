import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAll(term: string = ''): Observable<any[]> {
    return this.http.get<any>
      ('https://itunes.apple.com/search?media=music&entity=musicArtist&attribute=artistTerm&limit=200&term=' + term).pipe(
        map(result => {
          result.results = result.results.map(artist => {
            return {
              id: artist.artistId,
              name: artist.artistName
            };
          });
          return result;
        })
      );
  }

  getArtist(id: string) {
    return this.http.get<any>('https://itunes.apple.com/lookup?id=' + id + '&entity=album');
  }
}
