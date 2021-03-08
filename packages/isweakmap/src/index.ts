export function isWeakMap(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object WeakMap]';
}
