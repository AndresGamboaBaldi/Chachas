import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaEqPage } from './receta-eq.page';

describe('RecetaEqPage', () => {
  let component: RecetaEqPage;
  let fixture: ComponentFixture<RecetaEqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaEqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
