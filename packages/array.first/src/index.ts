export function first<T>(value: T[]): T | undefined {
  return Array.isArray(value) && value.length ? value[0] : void 0;
}
