import { isString } from '@annexe/isstring';

export function isNonEmptyString(value: unknown): boolean {
  return isString(value) && (value as string).trim() !== '';
}
