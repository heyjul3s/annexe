export function tail<T>(value: T[], index?: number): T[] {
  if (!!index && value.length) {
    return value.slice(index);
  }

  const [, ...tailValues] = value;
  return tailValues;
}
