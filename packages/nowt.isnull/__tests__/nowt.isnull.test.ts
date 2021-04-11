import { isNull } from '../src';

describe('@annexe/nowt.isnull', () => {
  it('returns TRUE when given a NULL value', () => {
    expect(isNull(null)).toEqual(true);
  });

  it('returns FALSE when given an invalid NULL value', () => {
    expect(isNull('null')).toEqual(false);
    expect(isNull(undefined)).toEqual(false);
    expect(isNull(void 0)).toEqual(false);
    expect(isNull(0)).toEqual(false);
    expect(isNull(-1)).toEqual(false);
  });
});
