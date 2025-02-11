import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvegetComponent } from './productveget.component';

describe('ProductvegetComponent', () => {
  let component: ProductvegetComponent;
  let fixture: ComponentFixture<ProductvegetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductvegetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductvegetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
