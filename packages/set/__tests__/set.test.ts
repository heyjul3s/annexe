import set from '../src';

describe('@annexe/set', () => {
  it('should have all available set methods', () => {
    expect(set.isSet).toBeDefined();
  });
});
