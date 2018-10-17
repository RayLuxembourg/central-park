import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { Ranger } from '../interfaces/Ranger';

@Injectable({ providedIn: 'root' })
export class RangersStore {
  @observable
  rangers: { [key: number]: Ranger };

  @observable
  ids: number[] = [];

  @action
  init(ids: number[], rangers) {
    this.ids = ids;
    this.rangers = rangers;
  }

  @action
  count(id) {
    this.rangers[id].counter++;
  }

  @action
  report(id: number) {
    this.rangers[id].counter = 0;
    this.rangers[id].reports++;
  }
}
