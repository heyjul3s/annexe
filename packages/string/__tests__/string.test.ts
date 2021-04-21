import string from '../src';

describe('@annexe/string', () => {
  it('should have all available string methods', () => {
    expect(string.isString).toBeDefined();
    expect(string.isEmptyString).toBeDefined();
  });
});
