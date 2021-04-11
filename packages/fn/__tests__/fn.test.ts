import fn from '../src';

describe('@annexe/fn', () => {
  it('should have all available function methods', () => {
    expect(fn.partial).toBeDefined();
    expect(fn.partialRight).toBeDefined();
  });
});
