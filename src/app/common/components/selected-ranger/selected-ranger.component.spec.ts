/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectedRangerComponent } from './selected-ranger.component';
import { MatProgressSpinnerModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NumberToArrayPipe } from '../../pipes/numberToArray.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectedRangerComponent', () => {
  let component: SelectedRangerComponent;
  let fixture: ComponentFixture<SelectedRangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedRangerComponent, NumberToArrayPipe],
      imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRangerComponent);
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
