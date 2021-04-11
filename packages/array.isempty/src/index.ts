export function isEmpty(value: unknown): boolean {
  return Array.isArray(value) && value.length === 0;
}
