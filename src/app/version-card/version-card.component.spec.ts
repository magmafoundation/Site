import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionCardComponent } from './version-card.component';

describe('VersionCardComponent', () => {
  let component: VersionCardComponent;
  let fixture: ComponentFixture<VersionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
