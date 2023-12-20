import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityComponent } from './capability.component';

describe('CapabilityComponent', () => {
  let component: CapabilityComponent;
  let fixture: ComponentFixture<CapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
