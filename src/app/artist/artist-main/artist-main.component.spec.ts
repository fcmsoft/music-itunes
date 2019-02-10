import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistMainComponent } from './artist-main.component';



describe('ArtistMainComponent', () => {
  let component: ArtistMainComponent;
  let fixture: ComponentFixture<ArtistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMainComponent ]
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
