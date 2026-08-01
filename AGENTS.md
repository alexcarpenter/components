# Repository guidance

## Base UI

Before adding or changing a component backed by Base UI, read
[`.agents/references/base-ui-usage.md`](.agents/references/base-ui-usage.md).

## Tooling

- Use the pnpm version declared by `packageManager` in `package.json`.
- Add root dependencies with `pnpm add --workspace-root`; include
  `--save-dev` for development-only tooling.
- Use pnpm's configured user-level store. If sandbox permissions prevent store
  access, request the required access instead of changing `store-dir`, creating
  a repository-local `.pnpm-store`, or reinstalling dependencies.
- Formatting and linting of changed files run automatically through
  `nano-staged` in the Codex Stop hook and the Husky pre-commit hook.
- Run `pnpm lint` and `pnpm format:check` for full-repository verification.
- Use Conventional Commits format for pull request titles, such as
  `chore(repo): add agent lint and format hooks`.
- Keep pull request descriptions concise and limited to a summary. Do not add a
  verification section.

## Color

Before adding or changing component colors, read
[`.agents/references/color-usage.md`](.agents/references/color-usage.md).

- Use the semantic variables exported by
  `packages/components/src/tokens.stylex.ts`; do not use raw palette values in
  component styles.
- Select a scale step according to the documented interaction or content role,
  not merely because it looks close.
- Preserve the established semantic families and their Radix mappings.
