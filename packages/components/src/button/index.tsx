"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";

import { dataAttributes } from "../utils/data-attributes";
import { mergeClassNames } from "../utils/merge-class-names";

export type ButtonProps = BaseButton.Props & {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "ghost" | "link";
  color?: "primary" | "neutral" | "negative";
  shape?: "default" | "square" | "circle";
};

export function Button({
  className,
  color = "primary",
  shape = "default",
  size = "md",
  variant = "filled",
  ...props
}: ButtonProps) {
  const generatedClassName = stylex.props(styles.root).className;

  return (
    <BaseButton
      {...props}
      {...dataAttributes({ size, variant, color, shape })}
      className={mergeClassNames(generatedClassName, className)}
    />
  );
}

const styles = stylex.create({
  root: {},
});
