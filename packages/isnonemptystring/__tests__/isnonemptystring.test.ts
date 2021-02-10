import { isNonEmptyString } from '../src/isnonemptystring';

describe('@annexe/isnonemptystring', () => {
  it('returns TRUE when provided a valid non-empty string value', () => {
    expect(isNonEmptyString('Lorem Ipsum Dolor Sit Amet')).toEqual(true);
  });

  it('returns FALSE when provided a valid false-like values', () => {
    expect(isNonEmptyString(0)).toEqual(false);
    expect(isNonEmptyString(false)).toEqual(false);
    expect(isNonEmptyString(void 0)).toEqual(false);
    expect(isNonEmptyString(null)).toEqual(false);
  });

  it('returns FALSE when provided a valid non-empty spaced string value', () => {
    expect(isNonEmptyString('')).toEqual(false);
    expect(isNonEmptyString(' ')).toEqual(false);
  });
});
