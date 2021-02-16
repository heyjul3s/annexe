type FnArgs = readonly unknown[];

export function partial<
  ArgsToApply extends FnArgs,
  OtherArgs extends FnArgs,
  ReturnType
>(
  fn: (...args: [...ArgsToApply, ...OtherArgs]) => ReturnType,
  ...firstArgs: ArgsToApply
): (...lastArgs: OtherArgs) => ReturnType {
  return (...lastArgs: OtherArgs) => fn(...firstArgs, ...lastArgs);
}
