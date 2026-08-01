# Releasing

Releases use npm Trusted Publishing and Staged Publishing. The workflow never
stores an npm write token, and the staged package requires manual approval with
2FA before it becomes public.

## One-time setup

`@alexcarpenter/components` must exist on npm before a trusted publisher can be
configured. For the first release only:

1. Set the package version in `packages/components/package.json`.
2. From `packages/components`, run `npm stage publish --access public --ignore-scripts` while authenticated to npm.
3. Open npm's **Staged Packages** page, inspect the package, and approve it with 2FA.

After the package exists, configure its npm package settings:

1. Open <https://www.npmjs.com/package/@alexcarpenter/components/access>.
2. Add a GitHub Actions trusted publisher with these exact values:
   - Organization or user: `alexcarpenter`
   - Repository: `components`
   - Workflow filename: `publish.yml`
   - Environment: leave blank
   - Allowed action: enable only **npm stage publish**
3. Set publishing access to require 2FA and disallow tokens.

Configure GitHub repository protection:

1. In <https://github.com/alexcarpenter/components/settings/actions>, enable **Allow GitHub Actions to create and approve pull requests** so the Changesets workflow can maintain the release pull request.
2. In <https://github.com/alexcarpenter/components/settings/rules>, add an active tag ruleset that includes `v*`, restricts tag creation, and allows only repository administrators to bypass it.
3. Enable immutable releases in the repository settings.
4. Protect `main` and require the `Validate` and `Zizmor` checks before merging.

## Recording a change

For a pull request that changes the published package:

1. Run `pnpm changeset`.
2. Select `@alexcarpenter/components` and the appropriate semantic version bump.
3. Write a concise, user-facing summary and commit the generated `.changeset/*.md` file with the pull request.

After changesets reach `main`, the `Changesets` workflow opens or updates a
release pull request containing the package version and changelog updates. It
does not have npm credentials or permission to publish.

## Publishing a release

1. Review and merge the Changesets release pull request.
2. Confirm the version in `packages/components/package.json` on `main`.
3. Create a signed tag matching the package version and push it:

   ```bash
   git tag -s v0.1.0 -m "v0.1.0"
   git push origin v0.1.0
   ```

4. Wait for the `Release` workflow to stage the package.
5. Inspect and approve the release from npm's **Staged Packages** page using 2FA.

The workflow rejects tags that do not exactly match the package version.
