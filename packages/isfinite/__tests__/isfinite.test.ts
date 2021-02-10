import { isFinite } from '../src';

describe('@annexe/isfinite', () => {
  it('returns TRUE when provided finite numeric values', () => {
    expect(isFinite(-1)).toEqual(true);
    expect(isFinite(1)).toEqual(true);
    expect(isFinite(+1)).toEqual(true);
    expect(isFinite(3.142)).toEqual(true);
  });

  it('returns FALSE when provided value is infinity', () => {
    expect(isFinite(Infinity)).toEqual(false);
  });
});
