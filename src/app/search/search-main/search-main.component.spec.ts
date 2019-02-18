import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchMainComponent } from './search-main.component';
import { ArtistService } from 'src/app/services/artist.service';
import { AlbumService } from 'src/app/services/album.service';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchMainComponent', () => {
  let component: SearchMainComponent;
  let fixture: ComponentFixture<SearchMainComponent>;

  beforeEach(async(() => {
    const artistServiceSpy = jasmine.createSpyObj('ArtistService', ['getArtist']);
    const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['getAlbum']);
    TestBed.configureTestingModule({
      declarations: [ SearchMainComponent ],
      providers: [
        { provide: ArtistService, useValue: artistServiceSpy },
        { provide: AlbumService, useValue: albumServiceSpy },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

