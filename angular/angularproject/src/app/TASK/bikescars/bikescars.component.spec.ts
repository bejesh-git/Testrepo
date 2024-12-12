import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikescarsComponent } from './bikescars.component';

describe('BikescarsComponent', () => {
  let component: BikescarsComponent;
  let fixture: ComponentFixture<BikescarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikescarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikescarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
