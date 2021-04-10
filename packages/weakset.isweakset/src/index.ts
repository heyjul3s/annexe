export function isWeakSet(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object WeakSet]';
}
