# Base UI usage

Use Base UI primitives as the behavioral foundation for interactive
components. Keep this package's wrappers focused on the public component API,
StyleX styling, and repository-specific behavior.

Sources:

- [Base UI — About](https://base-ui.com/react/overview/about)
- [Base UI — Accessibility](https://base-ui.com/react/overview/accessibility)
- [Base UI — Animation](https://base-ui.com/react/handbook/animation)
- [Base UI — Composition](https://base-ui.com/react/handbook/composition)

## Choose a primitive

- Check the installed `@base-ui/react` package and the relevant official
  component documentation before implementing a component.
- Prefer a Base UI primitive that already provides the required semantics,
  keyboard interaction, pointer interaction, focus management, and ARIA
  behavior. Do not recreate that behavior in the wrapper.
- Compose the documented parts and preserve their intended relationships. Do
  not omit required parts or replace semantic elements only to simplify
  styling.

## Preserve the API

- Derive the wrapper's props from the primitive's exported `Props` type, then
  add only the package-specific props the wrapper owns.
- Pass through supported consumer props, including refs, event handlers, ARIA
  attributes, and controlled or uncontrolled state props.
- Preserve Base UI state attributes. Add package-owned data attributes only for
  states or variants introduced by the wrapper.
- Do not replace Base UI event handling, focus handling, or state management
  unless the component's documented API explicitly requires it.

## Composition and semantics

- Use Base UI's `render` prop for composition. Do not introduce an `asChild`
  API.
- Preserve the primitive's default native element when possible.
- When `render` changes the native element, follow the primitive's documented
  requirements, including props such as `nativeButton`.
- Keep links as links and buttons as buttons. A link that looks like a button
  should use an anchor with button styling rather than button semantics.
- Merge generated and consumer props without dropping class names, styles,
  refs, or event handlers. Use Base UI's composition utilities when manual prop
  merging is required.

## Animation

- Follow Base UI's animation guide before adding motion to a component.
- Prefer CSS transitions for enter and exit motion. Transitions can reverse
  smoothly when a user interrupts an opening or closing animation.
- Use `[data-starting-style]` for the transition's initial state and
  `[data-ending-style]` for its final state. Let Base UI coordinate unmounting
  after the transition completes.
- Use CSS variables exposed by the component, such as `--transform-origin`,
  when they affect the animation.
- Respect reduced-motion preferences when motion is not essential.

Write the transition in StyleX. Use `:is()` to apply the same value for both
Base UI state attributes:

```tsx
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  popup: {
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "150ms",
    transitionProperty: "transform, opacity",
    opacity: {
      default: 1,
      ":is([data-starting-style], [data-ending-style])": 0,
    },
    transform: {
      default: "scale(1)",
      ":is([data-starting-style], [data-ending-style])": "scale(0.9)",
    },
  },
});
```

## Accessibility

- Treat Base UI's behavior as the baseline, not the complete accessibility
  implementation. Supply accessible names, descriptions, and group labels when
  the component's content does not provide them.
- Provide a visible `:focus-visible` treatment and preserve Base UI's focus
  management.
- Maintain documented disabled and loading behavior. For example, use
  `focusableWhenDisabled` when an async button must retain focus while loading.
- Verify semantic roles and relationships after composing primitives or
  changing rendered elements.

## Tests

- Test the wrapper's public API and repository-specific behavior rather than
  duplicating Base UI's internal test suite.
- Cover relevant keyboard interaction, focus movement or restoration,
  accessible names, disabled behavior, and controlled and uncontrolled state.
- Add regression tests whenever the wrapper changes Base UI composition,
  rendered elements, event handling, or state attributes.
