type FnArgs = readonly unknown[];

export function partial<
  ArgsToApply extends FnArgs,
  OtherArgs extends FnArgs,
  ReturnValue
>(
  fn: (...args: [...ArgsToApply, ...OtherArgs]) => ReturnValue,
  ...firstArgs: ArgsToApply
): (...lastArgs: OtherArgs) => ReturnValue {
  return (...lastArgs: OtherArgs) => fn(...firstArgs, ...lastArgs);
}
