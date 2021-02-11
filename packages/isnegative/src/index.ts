import { isNumber } from '@annexe/isnumber';

export function isNegative(value: unknown): boolean {
  const numericValue = Number(value);
  return isNumber(numericValue) ? numericValue < 0 : false;
}
