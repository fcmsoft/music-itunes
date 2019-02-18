import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistMainComponent } from './artist-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistService } from 'src/app/services/artist.service';



describe('ArtistMainComponent', () => {
  let component: ArtistMainComponent;
  let fixture: ComponentFixture<ArtistMainComponent>;

  beforeEach(async(() => {
    const artistServiceSpy = jasmine.createSpyObj('ArtistService', ['getArtist']);
    TestBed.configureTestingModule({
      declarations: [ ArtistMainComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ArtistService, useValue: artistServiceSpy },
       /*  { provide: ActivatedRoute, useValue: {
          params: of({id: 1})
        }} */
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
