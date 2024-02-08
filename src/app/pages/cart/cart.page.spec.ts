import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartPage],
      imports: [
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
