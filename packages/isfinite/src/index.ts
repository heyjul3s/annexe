import { isNumber } from '@annexe/isnumber';

export function isFinite(value: unknown): boolean {
  return isNumber(value) && Number.isFinite(value);
}
