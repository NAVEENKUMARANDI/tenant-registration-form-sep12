import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantMainMenuComponent } from './tenant-main-menu.component';

describe('TenantMainMenuComponent', () => {
  let component: TenantMainMenuComponent;
  let fixture: ComponentFixture<TenantMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
