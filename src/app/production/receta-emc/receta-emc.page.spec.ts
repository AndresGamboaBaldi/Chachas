import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaEmcPage } from "./RecetaEmcPage";

describe('RecetaEmcPage', () => {
  let component: RecetaEmcPage;
  let fixture: ComponentFixture<RecetaEmcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaEmcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaEmcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
