"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";

import { stylexRenderProps, type StyleXRenderStyle } from "../utils/stylex-render-props";
import { radiusVars, spacingVars, typeScaleVars } from "../tokens.stylex";

type ButtonColor = "primary" | "neutral" | "negative";
type ButtonShape = "default" | "square" | "circle";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "filled" | "outline" | "ghost" | "link";
type ButtonFullWidth = boolean;

export type ButtonState = BaseButton.State & {
  color: ButtonColor;
  shape: ButtonShape;
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth: ButtonFullWidth;
};

export type ButtonProps = Omit<BaseButton.Props, "className" | "style"> & {
  sx?: StyleXRenderStyle<ButtonState>;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  shape?: ButtonShape;
  fullWidth?: ButtonFullWidth;
};

export function Button({
  color = "primary",
  shape = "default",
  size = "md",
  variant = "filled",
  fullWidth = false,
  sx,
  ...props
}: ButtonProps) {
  const renderProps = stylexRenderProps<BaseButton.State>(
    styles.base,
    sizeStyles[size],
    shapeStyles[shape],
    fullWidth && styles.fullWidth,
    (state) =>
      typeof sx === "function" ? sx({ ...state, color, shape, size, variant, fullWidth }) : sx,
  );

  return <BaseButton {...props} {...renderProps} />;
}

const styles = stylex.create({
  base: {
    margin: 0,
    padding: 0,
    appearance: "none",
    boxSizing: "border-box",
    borderColor: "transparent",
    flexShrink: 0,
    minWidth: 0,
    color: "white",
    backgroundColor: "black",
    whiteSpace: "nowrap",
    outlineOffset: "4px",
  },
  fullWidth: {
    width: "100%",
  },
});

const sizeStyles = stylex.create({
  sm: {
    height: spacingVars["7"],
    paddingInline: spacingVars["2"],
    borderRadius: radiusVars.md,
    fontSize: typeScaleVars["xs-size"],
    lineHeight: typeScaleVars["xs-leading"],
  },
  md: {
    height: spacingVars["8"],
    paddingInline: spacingVars["2.5"],
    borderRadius: radiusVars.md,
    fontSize: typeScaleVars["sm-size"],
    lineHeight: typeScaleVars["sm-leading"],
  },
  lg: {
    height: spacingVars["9"],
    paddingInline: spacingVars["3"],
    borderRadius: radiusVars.lg,
    fontSize: typeScaleVars["sm-size"],
    lineHeight: typeScaleVars["sm-leading"],
  },
});

const shapeStyles = stylex.create({
  default: {},
  circle: {
    aspectRatio: "1/1",
    paddingInline: 0,
    borderRadius: radiusVars.full,
  },
  square: {
    aspectRatio: "1/1",
    paddingInline: 0,
  },
});
