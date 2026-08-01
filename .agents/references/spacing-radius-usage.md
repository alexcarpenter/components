# Spacing and radius usage

Use the spacing and radius variables exported by
`packages/components/src/tokens.stylex.ts` in component StyleX styles. Do not
repeat a raw length when the intended value already exists in one of these
scales.

```tsx
import * as stylex from "@stylexjs/stylex";

import { radiusVars, spacingVars } from "../tokens.stylex";

const styles = stylex.create({
  root: {
    borderRadius: radiusVars.md,
    gap: spacingVars["2"],
    paddingBlock: spacingVars["3"],
    paddingInline: spacingVars["4"],
  },
});
```

## Spacing scale

The spacing scale uses a 0.25rem base unit. Token names match their multiplier,
including decimal names such as `0.5` and `1.5`. Because the names are numeric,
always access spacing variables with bracket notation.

| Token | Value      |
| ----: | ---------- |
|   `0` | `0rem`     |
| `0.5` | `0.125rem` |
|   `1` | `0.25rem`  |
| `1.5` | `0.375rem` |
|   `2` | `0.5rem`   |
|   `3` | `0.75rem`  |
|   `4` | `1rem`     |
|   `5` | `1.25rem`  |
|   `6` | `1.5rem`   |
|   `7` | `1.75rem`  |
|   `8` | `2rem`     |
|   `9` | `2.25rem`  |
|  `10` | `2.5rem`   |
|  `11` | `2.75rem`  |
|  `12` | `3rem`     |

Choose a token by the spacing the layout requires, not by converting the value
to pixels in the component. Add a new scale step only when the design system
needs a reusable spacing value that the existing scale cannot express.

## Radius scale

| Token  | Value                  |
| ------ | ---------------------- |
| `xs`   | `0.125rem`             |
| `sm`   | `0.25rem`              |
| `md`   | `0.375rem`             |
| `lg`   | `0.5rem`               |
| `xl`   | `0.75rem`              |
| `2xl`  | `1rem`                 |
| `3xl`  | `1.5rem`               |
| `4xl`  | `2rem`                 |
| `none` | `0`                    |
| `full` | `calc(infinity * 1px)` |

Use `none` when a component explicitly requires square corners and `full` for
pills and circles. Use bracket notation for radius names that begin with a
number, such as `radiusVars["2xl"]`.
