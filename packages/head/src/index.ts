export function head<T>(value: T[], index?: number): T[] {
  if (!!index && value.length) {
    return value.slice(0, index);
  }

  const [headValue] = value;
  return headValue ? [headValue] : [];
}
