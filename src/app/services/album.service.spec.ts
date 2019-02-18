import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { HttpClient } from '@angular/common/http';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AlbumService', () => {
  // let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AlbumService
      ]
    });

    // Inject the http service and test controller for each test
    // httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AlbumService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAll', () => {
    it('should return an Observable', () => {
      service.getAll('dummy search text')
        .subscribe(result => {
          expect(result.length).toBe(2);
        });
        const req = httpTestingController.expectOne(
          'https://itunes.apple.com/search?media=music&entity=album&attribute=albumTerm&limit=200&term=dummy search text');

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toBe(
          `https://itunes.apple.com/search?media=music&entity=album&attribute=albumTerm&limit=200&term=dummy search text`);
        // Respond with mock data, causing Observable to resolve.
        req.flush([
          {'collectionId': 'res1', 'collectionName': 'name'},
          {'collectionId': 'res2', 'collectionName': 'name2'}
        ]);
    });
  });

  describe('getAlbum', () => {
    it('should return an Observable', () => {
      service.getAlbum('id')
        .subscribe(result => {
          expect(result.length).toBe(1);
        });
        const req = httpTestingController.expectOne(
          'https://itunes.apple.com/lookup?id=id&entity=song');

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toBe(
          'https://itunes.apple.com/lookup?id=id&entity=song');
        // Respond with mock data, causing Observable to resolve.
        req.flush([
          {'res': 'res1'}
        ]);
    });
  });

});
