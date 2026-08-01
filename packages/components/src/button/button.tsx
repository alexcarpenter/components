"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";

import { stylexRenderProps, type StyleXRenderStyle } from "../utils/stylex-render-props";

export type ButtonProps = Omit<BaseButton.Props, "className" | "style"> & {
  sx?: StyleXRenderStyle<BaseButton.State>;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "ghost" | "link";
  color?: "primary" | "neutral" | "negative";
  shape?: "default" | "square" | "circle";
};

export function Button({
  color = "primary",
  shape = "default",
  size = "md",
  variant = "filled",
  sx,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      {...props}
      data-color={color}
      data-shape={shape}
      data-size={size}
      data-variant={variant}
      {...stylexRenderProps(styles.base, sx)}
    />
  );
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
