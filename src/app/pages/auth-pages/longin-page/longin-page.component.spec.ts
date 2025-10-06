import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonginPageComponent } from './longin-page.component';

describe('LonginPageComponent', () => {
  let component: LonginPageComponent;
  let fixture: ComponentFixture<LonginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LonginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LonginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
