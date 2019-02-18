import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumMainComponent } from './album-main.component';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';


describe('AlbumMainComponent', () => {
  let component: AlbumMainComponent;
  let fixture: ComponentFixture<AlbumMainComponent>;

  beforeEach(async(() => {
    // const routerSpy = jasmine.createSpyObj('ActivatedRoute', ['params']);
    const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['getAlbum']);

    TestBed.configureTestingModule({
      declarations: [ AlbumMainComponent ],
      providers: [
        { provide: AlbumService, useValue: albumServiceSpy },
        { provide: ActivatedRoute, useValue: {
          params: of({id: 1})
        }}
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
