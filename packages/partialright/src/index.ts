type FnArgs = readonly unknown[];

export function partialRight<
  ArgsToApply extends FnArgs,
  OtherArgs extends FnArgs,
  ReturnType
>(
  fn: (...args: [...OtherArgs, ...ArgsToApply]) => ReturnType,
  ...lastArgs: ArgsToApply
): (...firstArgs: OtherArgs) => ReturnType {
  return (...firstArgs: OtherArgs) => fn(...firstArgs, ...lastArgs);
}
