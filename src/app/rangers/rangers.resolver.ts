import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ranger } from '../common/interfaces/Ranger';
import { ApiService } from '../common/services/api.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RangersResolver implements Resolve<Ranger[]> {
  constructor(private api: ApiService) {}

  handleError(error) {
    return of(null);
  }

  normalize(rangers: Ranger[]) {
    const rangersObj = {};
    const rangerIds = [];

    rangers.forEach(ranger => {
      rangersObj[ranger.id] = ranger;
      rangerIds.push(ranger.id);
    });

    return { ids: rangerIds, rangers: rangersObj };
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.api.rangers().pipe(
      catchError(this.handleError),
      map(this.normalize)
    );
  }
}
