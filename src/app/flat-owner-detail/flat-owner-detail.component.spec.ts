import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatOwnerDetailComponent } from './flat-owner-detail.component';

describe('FlatOwnerDetailComponent', () => {
  let component: FlatOwnerDetailComponent;
  let fixture: ComponentFixture<FlatOwnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatOwnerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatOwnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
