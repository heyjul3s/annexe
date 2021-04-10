import { isPlainObject } from '../src';

describe('@annexe/isplainobject', () => {
  it('returns TRUE when provided an object literal value', () => {
    expect(isPlainObject({})).toEqual(true);
  });

  it('returns TRUE when provided an object literal value', () => {
    expect(
      isPlainObject({
        id: 1,
        name: 'John Doe'
      })
    ).toEqual(true);
  });

  it('returns FALSE when provided object-like values', () => {
    expect(isPlainObject(null)).toEqual(false);
    expect(isPlainObject([])).toEqual(false);
    expect(isPlainObject(() => {})).toEqual(false);
  });

  it('returns FALSE when provided non-object like values', () => {
    expect(isPlainObject(false)).toEqual(false);
    expect(isPlainObject(1)).toEqual(false);
    expect(isPlainObject('')).toEqual(false);
  });
});
