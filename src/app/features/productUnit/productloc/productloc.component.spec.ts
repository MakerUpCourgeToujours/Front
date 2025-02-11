import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlocComponent } from './productloc.component';

describe('ProductlocComponent', () => {
  let component: ProductlocComponent;
  let fixture: ComponentFixture<ProductlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
