import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumMainComponent } from './album-main.component';
import { AlbumRoutingModule } from '../album-routing.module';

describe('AlbumMainComponent', () => {
  let component: AlbumMainComponent;
  let fixture: ComponentFixture<AlbumMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumMainComponent ],
      imports: [
        AlbumRoutingModule
      ]
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
