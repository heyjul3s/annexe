export function last<T>(value: T[]): T | undefined {
  return Array.isArray(value) && value.length ? <T>value.slice(-1)[0] : void 0;
}
