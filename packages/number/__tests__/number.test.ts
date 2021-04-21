import number from '../src';

describe('@annexe/number', () => {
  it('should have all available number methods', () => {
    expect(number.isNumber).toBeDefined();
    expect(number.isFloat).toBeDefined();
    expect(number.isFinite).toBeDefined();
  });
});
