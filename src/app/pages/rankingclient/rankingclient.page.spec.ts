import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankingclientPage } from './rankingclient.page';

describe('RankingclientPage', () => {
  let component: RankingclientPage;
  let fixture: ComponentFixture<RankingclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
