// @vitest-environment node

import { describe, expect, it } from "vitest";

import { mergeClassNames } from "../src/utils/merge-class-names";

type State = { disabled: boolean };

function resolveClassName(className: ReturnType<typeof mergeClassNames<State>>, state: State) {
  return typeof className === "function" ? className(state) : className;
}

describe("mergeClassNames", () => {
  it("joins static class names in argument order", () => {
    expect(mergeClassNames<State>("stylex", "consumer")).toBe("stylex consumer");
  });

  it("omits nullish and empty values", () => {
    expect(mergeClassNames<State>(undefined, null, "", "consumer")).toBe("consumer");
    expect(mergeClassNames<State>(undefined, null, "")).toBeUndefined();
  });

  it("resolves state callbacks alongside static classes", () => {
    const className = mergeClassNames<State>("stylex", (state) =>
      state.disabled ? "disabled" : "enabled",
    );

    expect(resolveClassName(className, { disabled: false })).toBe("stylex enabled");
    expect(resolveClassName(className, { disabled: true })).toBe("stylex disabled");
  });

  it("preserves callback ordering and ignores undefined results", () => {
    const className = mergeClassNames<State>(
      (state) => (state.disabled ? undefined : "interactive"),
      "base",
      (state) => (state.disabled ? "disabled" : undefined),
    );

    expect(resolveClassName(className, { disabled: false })).toBe("interactive base");
    expect(resolveClassName(className, { disabled: true })).toBe("base disabled");
  });
});
