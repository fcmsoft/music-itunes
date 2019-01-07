import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAll(term: string = ''): Observable<any[]> {
    return this.http.get<any>
      ('https://itunes.apple.com/search?media=music&entity=album&attribute=albumTerm&limit=200&term=' + term).pipe(
        map(result => {
          result.results = result.results.map(album => {
            return {
              id: album.collectionId,
              name: album.collectionName
            };
          });
          return result;
        })
      );
  }

  getAlbum(id: string) {
    return this.http.get<any>('https://itunes.apple.com/lookup?id=' + id + '&entity=song');
  }
}
