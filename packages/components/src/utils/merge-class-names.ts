export type ClassName<State> =
  string | ((state: State) => string | undefined) | null | undefined;

function joinClassNames(classNames: Array<string | null | undefined>) {
  const className = classNames.filter(Boolean).join(" ");
  return className || undefined;
}

export function mergeClassNames<State>(
  ...classNames: Array<ClassName<State>>
): string | ((state: State) => string | undefined) | undefined {
  const hasStateCallback = classNames.some(
    (className) => typeof className === "function",
  );

  if (!hasStateCallback) {
    return joinClassNames(classNames as Array<string | null | undefined>);
  }

  return (state) =>
    joinClassNames(
      classNames.map((className) =>
        typeof className === "function" ? className(state) : className,
      ),
    );
}
