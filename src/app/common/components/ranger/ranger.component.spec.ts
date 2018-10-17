/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RangerComponent } from './ranger.component';

describe('RangerComponent', () => {
  let component: RangerComponent;
  let fixture: ComponentFixture<RangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangerComponent);
    component = fixture.componentInstance;
    component.ranger = {
      id: 1,
      name: 'test agent',
      counter: 0,
      reports: 0,
      image: 'https://avatars1.githubusercontent.com/u/15327989?v=3&s=400'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
