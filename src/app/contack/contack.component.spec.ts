import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContackComponent } from './contack.component';

describe('ContackComponent', () => {
  let component: ContackComponent;
  let fixture: ComponentFixture<ContackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
