import { isEmptyString } from '../src';

describe('@annexe/isnonemptystring', () => {
  it('returns FALSE when provided a valid non-empty string value', () => {
    expect(isEmptyString('Lorem Ipsum Dolor Sit Amet')).toEqual(false);
  });

  it('returns FALSE when provided a valid false-like values', () => {
    expect(isEmptyString(0)).toEqual(false);
    expect(isEmptyString(false)).toEqual(false);
    expect(isEmptyString(void 0)).toEqual(false);
    expect(isEmptyString(null)).toEqual(false);
  });

  it('returns TRUE when provided a valid empty spaced string value', () => {
    expect(isEmptyString('')).toEqual(true);
    expect(isEmptyString(' ')).toEqual(true);
  });
});
