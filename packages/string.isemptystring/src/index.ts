import { isString } from '@annexe/string.isstring';

export function isEmptyString(value: unknown): boolean {
  return isString(value) && (value as string).trim() === '';
}
