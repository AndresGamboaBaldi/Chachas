import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnadirPage } from './anadir.page';

describe('AnadirPage', () => {
  let component: AnadirPage;
  let fixture: ComponentFixture<AnadirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
