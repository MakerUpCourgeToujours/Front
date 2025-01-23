import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboComponent } from './abo.component';

describe('AboComponent', () => {
  let component: AboComponent;
  let fixture: ComponentFixture<AboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
