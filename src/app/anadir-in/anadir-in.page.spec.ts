import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnadirInPage } from './anadir-in.page';

describe('AnadirInPage', () => {
  let component: AnadirInPage;
  let fixture: ComponentFixture<AnadirInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
