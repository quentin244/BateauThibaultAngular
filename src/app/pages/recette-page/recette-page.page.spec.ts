import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettePagePage } from './recette-page.page';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('RecettePagePage', () => {
  let component: RecettePagePage;
  let fixture: ComponentFixture<RecettePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecettePagePage],
      imports: [IonicModule.forRoot(), HttpClientModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
