/* tslint:disable:no-unused-variable */

import { NumberToArrayPipe } from './numberToArray.pipe';

describe('Pipe: NumberToArraye', () => {
  const pipe = new NumberToArrayPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should turn number to array', () => {
    const arr = pipe.transform(7);
    expect(arr.length).toBe(7);
  });
});
