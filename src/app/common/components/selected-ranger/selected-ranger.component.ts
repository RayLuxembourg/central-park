import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ranger } from '../../interfaces/Ranger';
import { NumberToArrayPipe } from '../../pipes/numberToArray.pipe';
import { MatProgressSpinnerModule, MatIconModule, MatButtonModule } from '@angular/material';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleAnimation } from '../../animations/scale.animation';

@Component({
  selector: 'app-selected-ranger',
  templateUrl: './selected-ranger.component.html',
  styleUrls: ['./selected-ranger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tree', [
      transition('* => *', [
        useAnimation(scaleAnimation, { params: { timing: '200ms cubic-bezier(0.35, 0, 0.25, 1)' } })
      ])
    ])
  ]
})
export class SelectedRangerComponent {
  @Input()
  loading: boolean;

  @Input()
  id;

  @Input()
  ranger: Ranger;

  @Output()
  count = new EventEmitter();

  @Output()
  report = new EventEmitter();

  constructor() {}
}

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  exports: [SelectedRangerComponent],
  declarations: [SelectedRangerComponent, NumberToArrayPipe],
  providers: []
})
export class SelectedRangerModule {}
