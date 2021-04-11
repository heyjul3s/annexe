import { isUndefined } from '../src';

describe('@annexe/nowt.isundefined', () => {
  it('returns TRUE when given a valid UNDEFINED value', () => {
    expect(isUndefined(undefined)).toEqual(true);
  });

  it('returns FALSE when given a invalid UNDEFINED value', () => {
    expect(isUndefined('undefined')).toEqual(false);
    expect(isUndefined(null)).toEqual(false);
    expect(isUndefined(-1)).toEqual(false);
    expect(isUndefined(0)).toEqual(false);
  });
});
