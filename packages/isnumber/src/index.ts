export function isNumber(value: unknown): boolean {
  return (
    value !== null &&
    !isNaN(value as number) &&
    Number.isFinite(value as number)
  );
}
