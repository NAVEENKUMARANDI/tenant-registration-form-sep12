import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbMeterDetailsComponent } from './eb-meter-details.component';

describe('EbMeterDetailsComponent', () => {
  let component: EbMeterDetailsComponent;
  let fixture: ComponentFixture<EbMeterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbMeterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbMeterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
