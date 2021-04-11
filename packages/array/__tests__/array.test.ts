import array from '../src';

describe('@annexe/array', () => {
  it('should have all available array methods', () => {
    expect(array.first).toBeDefined();
    expect(array.last).toBeDefined();
    expect(array.head).toBeDefined();
    expect(array.tail).toBeDefined();
    expect(array.reverse).toBeDefined();
    expect(array.isTypedArray).toBeDefined();
  });
});
