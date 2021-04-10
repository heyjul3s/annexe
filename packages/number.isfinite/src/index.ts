import { isNumber } from '@annexe/number.isnumber';

export function isFinite(value: unknown): boolean {
  return isNumber(value) && Number.isFinite(value);
}
