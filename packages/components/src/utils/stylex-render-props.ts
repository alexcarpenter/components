import type { CSSProperties } from "react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

export type StyleXRenderStyle<State> =
  | StyleXStyles
  | ((state: State) => StyleXStyles)
  | false
  | null
  | undefined;

export function stylexRenderProps<State>(...styles: ReadonlyArray<StyleXRenderStyle<State>>): {
  className: (state: State) => string | undefined;
  style: (state: State) => CSSProperties | undefined;
} {
  const resolve = (state: State) =>
    stylex.props(
      styles.map((stylesOrCallback) =>
        typeof stylesOrCallback === "function" ? stylesOrCallback(state) : stylesOrCallback,
      ),
    );

  return {
    className: (state) => resolve(state).className,
    style: (state) => resolve(state).style as CSSProperties | undefined,
  };
}
