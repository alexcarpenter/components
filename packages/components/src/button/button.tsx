"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";

import { stylexRenderProps, type StyleXRenderStyle } from "../utils/stylex-render-props";

type ButtonColor = "primary" | "neutral" | "negative";
type ButtonShape = "default" | "square" | "circle";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "filled" | "outline" | "ghost" | "link";

export type ButtonState = BaseButton.State & {
  color: ButtonColor;
  shape: ButtonShape;
  size: ButtonSize;
  variant: ButtonVariant;
};

export type ButtonProps = Omit<BaseButton.Props, "className" | "style"> & {
  sx?: StyleXRenderStyle<ButtonState>;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  shape?: ButtonShape;
};

export function Button({
  color = "primary",
  shape = "default",
  size = "md",
  variant = "filled",
  sx,
  ...props
}: ButtonProps) {
  const renderProps = stylexRenderProps<BaseButton.State>(styles.base, (state) =>
    typeof sx === "function" ? sx({ ...state, color, shape, size, variant }) : sx,
  );

  return <BaseButton {...props} {...renderProps} />;
}

const styles = stylex.create({
  base: {
    appearance: "none",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
});
