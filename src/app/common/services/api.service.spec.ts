/* tslint:disable:no-unused-variable */

import { TestBed, getTestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Api', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should return Observable<Ranger[]>', () => {
    const dummyRangers = [
      {
        id: 1,
        name: 'Ray Luxembourg',
        counter: 0,
        image: 'https://avatars1.githubusercontent.com/u/15327989?v=3&s=400',
        reports: 36
      },
      {
        id: 2,
        name: 'Zach The Duck',
        counter: 9,
        image:
          // tslint:disable-next-line:max-line-length
          'https://static1.squarespace.com/static/57b506659de4bb1ba9298b37/57b5068615d5db700b9dc72c/57bc8eb5e58c62993059cb9d/1485204654551/Ashton_Kutcher_ZachGold_1.jpg?format=1000w',
        reports: 15
      }
    ];
    service.rangers().subscribe(rangers => {
      expect(rangers.length).toBe(2);
      expect(rangers).toEqual(dummyRangers);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rangers`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRangers);
  });

  it('should return Observable<Ranger> by id', () => {
    const dummyId = 1;

    service.ranger(dummyId).subscribe(ranger => {
      expect(ranger.id).toBe(1);
    });
    const req = httpMock.expectOne(`${service.apiUrl}/rangers/${dummyId}`);
    expect(req.request.method).toBe('GET');
    req.flush({
      id: 1,
      name: 'Ray Luxembourg',
      counter: 0,
      image: 'https://avatars1.githubusercontent.com/u/15327989?v=3&s=400',
      reports: 36
    });
  });

  it('should update ranger and return Observable<Ranger>', () => {
    const dummyRanger = {
      id: 1,
      name: 'Ray Luxembourg',
      counter: 0,
      image: 'https://avatars1.githubusercontent.com/u/15327989?v=3&s=400',
      reports: 36
    };

    const updatedRanger = {
      id: 1,
      name: 'Ray Luxembourg',
      counter: 5,
      image: 'https://avatars1.githubusercontent.com/u/15327989?v=3&s=400',
      reports: 36
    };

    service.updateRanger(1, updatedRanger).subscribe(ranger => {
      console.log(ranger);

      expect(ranger.counter).toBe(5);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rangers/${dummyRanger.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedRanger);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
