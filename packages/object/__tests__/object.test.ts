import object from '../src';

describe('@annexe/object', () => {
  it('should have all available object methods', () => {
    expect(object.isPlainObject).toBeDefined();
  });
});
