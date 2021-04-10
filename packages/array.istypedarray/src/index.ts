export function isTypedArray(value: unknown): boolean {
  const typedArrayTypes = new Set<string>([
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
  ]);

  const VALUE_TYPE_REGEX = /([^\[object\s]\w*)/;
  const prototypeValue = Object.prototype.toString.call(value);
  const valueType = prototypeValue.match(VALUE_TYPE_REGEX)![0];

  return typedArrayTypes.has(valueType);
}
