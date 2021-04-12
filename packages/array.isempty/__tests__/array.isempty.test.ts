import isEmpty from '../src';

describe('@annexe/array.isempty', () => {
  it('returns TRUE when provided an empty array', () => {
    const myArray = [];
    expect(isEmpty(myArray)).toEqual(true);
  });

  it('returns FALSE when provided a non-empty array', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(isEmpty(myArray)).toEqual(false);

    const myNestedArray = [[1, 2], [], ['a', 'b']];
    expect(isEmpty(myNestedArray)).toEqual(false);
  });

  it('returns FALSE when provided a non-array type', () => {
    expect(isEmpty({})).toEqual(false);
    expect(isEmpty(null)).toEqual(false);
    expect(isEmpty(void 0)).toEqual(false);
    expect(isEmpty(new Set())).toEqual(false);
    expect(isEmpty(new Map())).toEqual(false);
  });
});
