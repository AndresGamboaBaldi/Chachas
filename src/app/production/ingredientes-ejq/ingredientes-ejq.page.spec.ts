import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientesEjqPage } from './ingredientes-ejq.page';

describe('IngredientesEjqPage', () => {
  let component: IngredientesEjqPage;
  let fixture: ComponentFixture<IngredientesEjqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesEjqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientesEjqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
