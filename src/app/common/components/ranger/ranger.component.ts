import { Component, OnInit, NgModule, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ranger } from '../../interfaces/Ranger';

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangerComponent {
  @Input()
  ranger: Ranger;
}

@NgModule({
  imports: [CommonModule],
  exports: [RangerComponent],
  declarations: [RangerComponent],
  providers: []
})
export class RangerModule {}
