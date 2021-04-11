import nowt from '../src';

describe('@annexe/nowt', () => {
  it('should have all available nowt methods', () => {
    expect(nowt.isNil).toBeDefined();
    expect(nowt.isNull).toBeDefined();
    expect(nowt.isUndefined).toBeDefined();
  });
});
