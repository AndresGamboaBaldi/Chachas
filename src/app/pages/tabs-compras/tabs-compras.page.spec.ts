import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsComprasPage } from './tabs-compras.page';

describe('TabsComprasPage', () => {
  let component: TabsComprasPage;
  let fixture: ComponentFixture<TabsComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
