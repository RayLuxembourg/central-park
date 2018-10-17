import { Directive, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Ranger } from '../interfaces/Ranger';
import { RangersStore } from '../stores/rangers.store';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rangerCounter]',
  exportAs: 'counter'
})
export class CounterDirective {
  public loading: boolean;

  @Input()
  id: number;
  constructor(private api: ApiService, private store: RangersStore) {}

  add() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    const count = this.store.rangers[this.id].counter + 1;
    console.log(count);

    this.api
      .updateRanger(this.store.rangers[this.id].id, {
        ...this.store.rangers[this.id],
        counter: count
      })
      .subscribe(
        ranger => {
          this.loading = false;
          this.store.count(this.id);
        },
        error => (this.loading = false)
      );
  }

  report() {
    this.loading = true;
    this.api
      .updateRanger(this.id, {
        ...this.store.rangers[this.id],
        reports: 1 + this.store.rangers[this.id].reports,
        counter: 0
      })
      .subscribe(
        ranger => {
          this.loading = false;
          this.store.report(this.id);
        },
        error => (this.loading = false)
      );
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [CounterDirective],
  declarations: [CounterDirective],
  providers: [CounterDirective]
})
export class CounterModule {}
