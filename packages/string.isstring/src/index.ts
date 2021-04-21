export function isString(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object String]';
}
