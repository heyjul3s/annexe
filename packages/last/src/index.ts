import { head } from '@annexe/head';

export function last<T>(value: T[]): T | undefined {
  return Array.isArray(value) && value.length
    ? head<T>(value.slice(-1))
    : void 0;
}
