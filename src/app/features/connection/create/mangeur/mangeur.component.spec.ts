import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeurComponent } from './mangeur.component';

describe('MangeurComponent', () => {
  let component: MangeurComponent;
  let fixture: ComponentFixture<MangeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
