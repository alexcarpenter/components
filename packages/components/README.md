# @alexcarpenter/components

Source-distributed React components built from Base UI primitives and styled
with StyleX.

```tsx
import { Button } from "@alexcarpenter/components/button";

<Button variant="primary">Save changes</Button>;
```

Consumers must compile StyleX and include this package's source in their StyleX
extraction configuration.

## Color tokens

The `@alexcarpenter/components/tokens.stylex` export provides 12-step semantic
color scales for neutral, primary, negative, warning, and positive colors. Each
scale also has transparent alpha tokens, named with an `A` before the step (for
example, `primaryA9`). The scales follow Radix Colors' documented step usage.
See [Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)
for the intended role of each step.

Each token uses CSS `light-dark()` to select its appearance. Set `color-scheme`
in the consuming application: use `color-scheme: light dark` to follow the
operating-system preference, or set `light` or `dark` to choose a mode
explicitly. This package does not set a global color scheme.
