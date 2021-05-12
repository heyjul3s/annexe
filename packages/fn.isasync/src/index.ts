export function isAsync(val: unknown): boolean {
  return Object.prototype.toString.call(val) === '[object AsyncFunction]';
}

