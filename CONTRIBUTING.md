# Contributing

## Development setup

This repository uses Node.js 24 and pnpm 11 through Corepack.

```bash
corepack enable
corepack install
pnpm install --frozen-lockfile
```

Start the Next.js documentation site with:

```bash
pnpm dev
```

Start Storybook to develop components with interactive prop controls:

```bash
pnpm storybook
```

The app runs at `http://localhost:6006`. Create component stories in
`apps/storybook/stories` and expose supported variants through Storybook args.

## Making changes

Create a focused branch and keep component code, tests, and documentation in
the same pull request. Follow the existing Base UI and StyleX patterns in
`packages/components`.

Before opening a pull request, run:

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

Use `pnpm test:watch` while developing and `pnpm test:coverage` when checking
coverage locally.

## Conventional Commits

Commit messages follow the
[Conventional Commits 1.0.0 specification](https://www.conventionalcommits.org/en/v1.0.0/):

```text
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

Use a short, lowercase type and a concise description. Common types in this
repository are:

- `feat`: new user-facing behavior
- `fix`: a user-facing bug fix
- `docs`: documentation-only changes
- `refactor`: code changes that preserve behavior
- `test`: test-only changes
- `build`: build system or dependency changes
- `ci`: continuous integration changes
- `chore`: repository maintenance not covered by another type

Use a scope when it adds useful context, such as `button`, `components`, or
`docs`.

```text
feat(button): add a loading state
fix(button): preserve disabled semantics
docs: document button variants
ci: add changesets release workflow
```

Mark a breaking change with `!` before the colon or with a `BREAKING CHANGE:`
footer. Explain the migration in the commit body or footer.

```text
feat(button)!: replace tone with color

BREAKING CHANGE: Use the color prop instead of tone.
```

## Changesets

[Changesets](https://github.com/changesets/changesets) controls package
versions and changelog entries. Conventional Commit types do not automatically
select a version bump.

Add a changeset when a pull request changes the published behavior or API of
`@alexcarpenter/components`, including:

- New components, props, or capabilities
- Bug fixes and accessibility fixes
- Styling or token changes visible to consumers
- Breaking API or behavior changes
- Dependency changes that affect package consumers

A changeset is usually unnecessary for documentation-only changes, tests,
internal refactors with no behavior change, or repository tooling that does not
affect the published package.

Create one before opening the pull request:

```bash
pnpm changeset
```

Select `@alexcarpenter/components`, choose the semantic version bump, and write
a concise user-facing summary. Commit the generated `.changeset/*.md` file with
the implementation. Use:

- `patch` for backward-compatible fixes
- `minor` for backward-compatible features
- `major` for breaking changes

Review the pending release plan with:

```bash
pnpm changeset:status
```

Do not manually change the package version or generated changelog. After
changesets merge to `main`, the Changesets workflow opens or updates a release
pull request with those changes. Maintainers review and merge that pull request,
then follow [RELEASING.md](./RELEASING.md) to create the signed release tag and
stage the package on npm.

## Pull requests

Pull requests should include tests for changed component behavior and utilities.
Describe the consumer-visible impact, note any accessibility considerations,
and include a changeset when required. CI must pass before merging.
