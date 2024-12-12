import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleimageComponent } from './toggleimage.component';

describe('ToggleimageComponent', () => {
  let component: ToggleimageComponent;
  let fixture: ComponentFixture<ToggleimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
