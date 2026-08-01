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

1. In <https://github.com/alexcarpenter/components/settings/rules>, add an active tag ruleset that includes `v*`, restricts tag creation, and allows only repository administrators to bypass it.
2. Enable immutable releases in the repository settings.
3. Protect `main` and require the `Validate` and `Zizmor` checks before merging.

## Publishing a release

1. Update `packages/components/package.json` and any changelog for the release.
2. Commit and merge the release changes to `main`.
3. Create a signed tag matching the package version and push it:

   ```bash
   git tag -s v0.1.0 -m "v0.1.0"
   git push origin v0.1.0
   ```

4. Wait for the `Release` workflow to stage the package.
5. Inspect and approve the release from npm's **Staged Packages** page using 2FA.

The workflow rejects tags that do not exactly match the package version.
