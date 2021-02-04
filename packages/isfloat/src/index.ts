export function isFloat(value: unknown): boolean {
  return (value as number) % 1 !== 0;
}
