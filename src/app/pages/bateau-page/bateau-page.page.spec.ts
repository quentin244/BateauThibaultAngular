import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauPagePage } from './bateau-page.page';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';

describe('BateauPagePage', () => {
  let component: BateauPagePage;
  let fixture: ComponentFixture<BateauPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BateauPagePage],
      imports: [IonicModule.forRoot(), HttpClientModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
