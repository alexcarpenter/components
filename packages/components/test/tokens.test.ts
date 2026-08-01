import {
  amber,
  amberA,
  amberDark,
  amberDarkA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  red,
  redA,
  redDark,
  redDarkA,
} from "@radix-ui/colors";
import { describe, expect, it } from "vitest";

import { colorDefaults, radiusDefaults, spacingDefaults } from "../src/tokens.stylex";

describe("spacing tokens", () => {
  it("defines the selected 0.25rem-based scale", () => {
    expect(spacingDefaults).toEqual({
      "0": "0rem",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
    });
  });
});

describe("radius tokens", () => {
  it("defines the radius scale", () => {
    expect(radiusDefaults).toEqual({
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      none: "0",
      full: "calc(infinity * 1px)",
    });
  });
});

const scales = {
  neutral: [gray, grayDark, grayA, grayDarkA],
  primary: [blue, blueDark, blueA, blueDarkA],
  negative: [red, redDark, redA, redDarkA],
  warning: [amber, amberDark, amberA, amberDarkA],
  positive: [green, greenDark, greenA, greenDarkA],
} as const;

describe("color tokens", () => {
  it("defines all 120 semantic scale tokens", () => {
    const expectedKeys = Object.keys(scales).flatMap((family) => [
      ...Array.from({ length: 12 }, (_, index) => `${family}${index + 1}`),
      ...Array.from({ length: 12 }, (_, index) => `${family}A${index + 1}`),
    ]);

    expect(Object.keys(colorDefaults)).toHaveLength(120);
    expect(Object.keys(colorDefaults)).toEqual(expectedKeys);
  });

  it("matches the pinned Radix light and dark scales", () => {
    for (const [family, [light, dark, lightAlpha, darkAlpha]] of Object.entries(scales)) {
      const radixFamily =
        family === "neutral"
          ? "gray"
          : family === "primary"
            ? "blue"
            : family === "negative"
              ? "red"
              : family === "warning"
                ? "amber"
                : "green";

      for (let step = 1; step <= 12; step += 1) {
        expect(colorDefaults[`${family}${step}` as keyof typeof colorDefaults]).toBe(
          `light-dark(${light[`${radixFamily}${step}` as keyof typeof light]}, ${dark[`${radixFamily}${step}` as keyof typeof dark]})`,
        );
        expect(colorDefaults[`${family}A${step}` as keyof typeof colorDefaults]).toBe(
          `light-dark(${lightAlpha[`${radixFamily}A${step}` as keyof typeof lightAlpha]}, ${darkAlpha[`${radixFamily}A${step}` as keyof typeof darkAlpha]})`,
        );
      }
    }
  });
});
