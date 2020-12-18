import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientesEmqPage } from './ingredientes-emq.page';

describe('IngredientesEmqPage', () => {
  let component: IngredientesEmqPage;
  let fixture: ComponentFixture<IngredientesEmqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesEmqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientesEmqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
