import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielraumComponent } from './spielraum.component';

describe('SpielraumComponent', () => {
  let component: SpielraumComponent;
  let fixture: ComponentFixture<SpielraumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielraumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielraumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
