export function flat(srcObj: {}) {
  return Object.assign(
    {},
    ...(function flatten(obj: {}): any {
      return [].concat(
        ...Object.keys(obj).map(key =>
          typeof obj[key] === 'object' ? flatten(obj[key]) : { [key]: obj[key] }
        )
      );
    })(srcObj)
  );
};
