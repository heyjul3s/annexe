import { isTypedArray } from '../src';

describe('@annexe/istypedarray', () => {
  it('returns TRUE when given a TypedArray as value', () => {
    expect(isTypedArray(new Int8Array())).toEqual(true);
    expect(isTypedArray(new Uint8Array())).toEqual(true);
    expect(isTypedArray(new Uint8ClampedArray())).toEqual(true);
    expect(isTypedArray(new Int16Array())).toEqual(true);
    expect(isTypedArray(new Uint16Array())).toEqual(true);
    expect(isTypedArray(new Int32Array())).toEqual(true);
    expect(isTypedArray(new Uint32Array())).toEqual(true);
    expect(isTypedArray(new Float32Array())).toEqual(true);
    expect(isTypedArray(new Float64Array())).toEqual(true);
    expect(isTypedArray(new BigInt64Array())).toEqual(true);
    expect(isTypedArray(new BigUint64Array())).toEqual(true);
  });

  it('returns FALSE when give false-like values', () => {
    expect(isTypedArray(false)).toEqual(false);
    expect(isTypedArray(0)).toEqual(false);
    expect(isTypedArray(null)).toEqual(false);
    expect(isTypedArray(void 0)).toEqual(false);
  });

  it('returns FALSE when give object-like as value', () => {
    expect(isTypedArray({})).toEqual(false);
    expect(isTypedArray(new Map())).toEqual(false);
  });

  it('returns FALSE when give an array as value', () => {
    expect(isTypedArray([])).toEqual(false);
    expect(isTypedArray([1, 2, 3])).toEqual(false);
  });

  it('returns FALSE when give a Set as value', () => {
    expect(isTypedArray(new Set())).toEqual(false);
  });
});
