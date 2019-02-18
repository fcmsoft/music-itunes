import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

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
        }),
        catchError(this.handleError)
      );
  }

  getArtist(id: string) {
    return this.http.get<any>('https://itunes.apple.com/lookup?id=' + id + '&entity=album');
  }
}
