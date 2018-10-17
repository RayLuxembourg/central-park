import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangersComponent } from './rangers.component';
import { Routes, RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CounterModule } from '../common/directives/counter.directive';
import { RangersResolver } from './rangers.resolver';
import { MobxAngularModule } from 'mobx-angular';
import { NumberToArrayPipe } from '../common/pipes/numberToArray.pipe';
import { RangerModule } from '../common/components/ranger/ranger.component';
import { SelectedRangerModule } from '../common/components/selected-ranger/selected-ranger.component';

const routes: Routes = [
  {
    path: '',
    component: RangersComponent,
    pathMatch: 'full',
    resolve: {
      rangers: RangersResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':id',
    component: RangersComponent,
    pathMatch: 'full',
    resolve: {
      rangers: RangersResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    CounterModule,
    MobxAngularModule,
    MatProgressSpinnerModule,
    RangerModule,
    SelectedRangerModule
  ],
  declarations: [RangersComponent],
  providers: [RangersResolver]
})
export class RangersModule {}
