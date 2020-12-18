import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaEjqPage } from './receta-ejq.page';

describe('RecetaEjqPage', () => {
  let component: RecetaEjqPage;
  let fixture: ComponentFixture<RecetaEjqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEjqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaEjqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
