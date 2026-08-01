// @vitest-environment node

import { describe, expect, it } from "vitest";

import { dataAttributes } from "../src/utils/data-attributes";

describe("dataAttributes", () => {
  it("reflects values as string data attributes", () => {
    expect(
      dataAttributes({ size: "md", level: 2, interactive: false }),
    ).toEqual({
      "data-size": "md",
      "data-level": "2",
      "data-interactive": "false",
    });
  });

  it("kebab-cases camelCase property names", () => {
    expect(dataAttributes({ buttonShape: "circle" })).toEqual({
      "data-button-shape": "circle",
    });
  });

  it("omits nullish values", () => {
    expect(
      dataAttributes({ variant: "filled", color: null, shape: undefined }),
    ).toEqual({
      "data-variant": "filled",
    });
  });
});
