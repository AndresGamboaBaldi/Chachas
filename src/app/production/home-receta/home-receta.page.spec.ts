import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeRecetaPage } from './home-receta.page';

describe('HomeRecetaPage', () => {
  let component: HomeRecetaPage;
  let fixture: ComponentFixture<HomeRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
