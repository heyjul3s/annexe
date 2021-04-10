import weakmap from '../src';

describe('@annexe/weakmap', () => {
  it('should have all available weakmap methods', () => {
    expect(weakmap.isWeakMap).toBeDefined();
  });
});
