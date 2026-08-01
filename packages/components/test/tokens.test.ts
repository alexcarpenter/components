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

import { colorDefaults } from "../src/tokens.stylex";

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
    for (const [family, [light, dark, lightAlpha, darkAlpha]] of Object.entries(
      scales,
    )) {
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
        expect(
          colorDefaults[`${family}${step}` as keyof typeof colorDefaults],
        ).toBe(
          `light-dark(${light[`${radixFamily}${step}` as keyof typeof light]}, ${dark[`${radixFamily}${step}` as keyof typeof dark]})`,
        );
        expect(
          colorDefaults[`${family}A${step}` as keyof typeof colorDefaults],
        ).toBe(
          `light-dark(${lightAlpha[`${radixFamily}A${step}` as keyof typeof lightAlpha]}, ${darkAlpha[`${radixFamily}A${step}` as keyof typeof darkAlpha]})`,
        );
      }
    }
  });
});
