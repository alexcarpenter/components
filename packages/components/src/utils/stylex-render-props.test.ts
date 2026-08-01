import * as stylex from "@stylexjs/stylex";
import { describe, expect, it, vi } from "vitest";

import { stylexRenderProps } from "./stylex-render-props";

type State = {
  disabled: boolean;
  opacity: number;
};

const styles = stylex.create({
  base: {
    display: "inline-flex",
  },
  disabled: {
    cursor: "not-allowed",
  },
  opacity: (value: number) => ({
    opacity: value,
  }),
});

describe("stylexRenderProps", () => {
  it("resolves static styles for Base UI render props", () => {
    const renderProps = stylexRenderProps<State>(styles.base, styles.disabled);
    const state = { disabled: false, opacity: 1 };
    const expected = stylex.props(styles.base, styles.disabled);

    expect(renderProps.className(state)).toBe(expected.className);
    expect(renderProps.style(state)).toEqual(expected.style);
  });

  it("resolves styles from the current render state", () => {
    const sx = vi.fn((state: State) => [
      state.disabled && styles.disabled,
      styles.opacity(state.opacity),
    ]);
    const renderProps = stylexRenderProps(styles.base, sx);
    const state = { disabled: true, opacity: 0.5 };
    const expected = stylex.props(styles.base, styles.disabled, styles.opacity(0.5));

    expect(renderProps.className(state)).toBe(expected.className);
    expect(renderProps.style(state)).toEqual(expected.style);
    expect(sx).toHaveBeenCalledWith(state);
  });

  it("ignores absent and false styles", () => {
    const renderProps = stylexRenderProps<State>(undefined, false, null, styles.base);
    const state = { disabled: false, opacity: 1 };

    expect(renderProps.className(state)).toBe(stylex.props(styles.base).className);
  });
});
