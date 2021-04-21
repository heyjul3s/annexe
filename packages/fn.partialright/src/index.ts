type FnArgs = readonly unknown[];

export function partialRight<
  ArgsToApply extends FnArgs,
  OtherArgs extends FnArgs,
  ReturnValue
>(
  fn: (...args: [...OtherArgs, ...ArgsToApply]) => ReturnValue,
  ...lastArgs: ArgsToApply
): (...firstArgs: OtherArgs) => ReturnValue {
  return (...firstArgs: OtherArgs) => fn(...firstArgs, ...lastArgs);
}
