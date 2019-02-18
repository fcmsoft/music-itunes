import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  //let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ArtistService
      ]
    });

    // Inject the http service and test controller for each test
  //  httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ArtistService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAll', () => {
    it('should return an Observable', () => {
      service.getAll('dummy')
        .subscribe(result => {
          expect(result.length).toBe(2);
        });
      const req = httpTestingController.expectOne(
        `https://itunes.apple.com/search?media=music&entity=musicArtist&attribute=artistTerm&limit=200&term=dummy`);

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toBe(
          `https://itunes.apple.com/search?media=music&entity=musicArtist&attribute=artistTerm&limit=200&term=dummy`);
        // Respond with mock data, causing Observable to resolve.
        req.flush([
          {'artistId': 'res1', 'artistName': 'name'},
          {'artistId': 'res2', 'artistName': 'name2'}
        ]);
    });
  });

  describe('getArtist', () => {
    it('should return an Observable', () => {
      service.getArtist('id')
        .subscribe(result => {
          expect(result.length).toBe(1);
        });
        const req = httpTestingController.expectOne(
          'https://itunes.apple.com/lookup?id=id&entity=album');

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toBe(
          'https://itunes.apple.com/lookup?id=id&entity=album');
        // Respond with mock data, causing Observable to resolve.
        req.flush([
          {'res': 'res1'}
        ]);
    });
  });

});
