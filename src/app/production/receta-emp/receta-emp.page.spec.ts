import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaEmpPage } from './receta-emp.page';

describe('RecetaEmpPage', () => {
  let component: RecetaEmpPage;
  let fixture: ComponentFixture<RecetaEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
