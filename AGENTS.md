# Repository guidance

## Color

Before adding or changing component colors, read
[`.agents/references/color-usage.md`](.agents/references/color-usage.md).

- Use the semantic variables exported by
  `packages/components/src/tokens.stylex.ts`; do not use raw palette values in
  component styles.
- Select a scale step according to the documented interaction or content role,
  not merely because it looks close.
- Preserve the established semantic families and their Radix mappings.
