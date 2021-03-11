import { first } from '@annexe/first';

export function last<T>(value: T[]): T | undefined {
  return Array.isArray(value) && value.length
    ? first<T>(value.slice(-1))
    : void 0;
}
