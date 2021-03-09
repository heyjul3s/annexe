export function isTypedArray(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object Int8Array]';
}
