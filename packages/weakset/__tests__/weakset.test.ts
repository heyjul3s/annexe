import weakset from '../src';

describe('@annexe/weakset', () => {
  it('should have all available weakset methods', () => {
    expect(weakset.isWeakSet).toBeDefined();
  });
});
