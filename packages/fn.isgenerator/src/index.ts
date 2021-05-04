export function isGenerator(val: unknown): boolean {
  return Object.prototype.toString.call(val) === '[object GeneratorFunction]';
}
