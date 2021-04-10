import { isNumber } from '@annexe/number.isnumber';

export function isFloat(value: unknown): boolean {
  if (!isNumber(value)) {
    return false;
  }

  return (value as number) % 1 !== 0;
}
