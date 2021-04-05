export function isNumber(value: unknown): boolean {
  return (
    value != null &&
    Object.prototype.toString.call(value) === '[object Number]' &&
    !isNaN(value as number)
  );
}
