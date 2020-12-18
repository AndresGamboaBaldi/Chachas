import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientesEmpPage } from './ingredientes-emp.page';

describe('IngredientesEmpPage', () => {
  let component: IngredientesEmpPage;
  let fixture: ComponentFixture<IngredientesEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientesEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
