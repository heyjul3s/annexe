export function tail<T extends any[]>([, ...tailValues]: T[]): T[] {
  return tailValues;
}
