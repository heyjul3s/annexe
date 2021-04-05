export function reverse<T extends any[]>(array: T): T {
  return array.reduce((memo, curr) => [curr, ...memo], []);
}
