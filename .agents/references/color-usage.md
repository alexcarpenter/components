# Color usage

The semantic color tokens follow Radix Colors' 12-step usage model. Treat the
step number as a role shared by every color family, rather than as a simple
light-to-dark sequence.

Source: [Radix Colors — Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)

## Step reference

| Step | Intended use                                              |
| ---: | --------------------------------------------------------- |
|    1 | Main application background                               |
|    2 | Subtle background, such as a card, sidebar, or code block |
|    3 | Default UI element background                             |
|    4 | Hovered UI element background                             |
|    5 | Pressed, active, or selected UI element background        |
|    6 | Subtle border or separator on non-interactive UI          |
|    7 | Border on an interactive UI element                       |
|    8 | Strong interactive border or focus ring                   |
|    9 | Solid, high-chroma background                             |
|   10 | Hovered solid background paired with step 9               |
|   11 | Lower-contrast text                                       |
|   12 | High-contrast text                                        |

## Applying the steps

### Backgrounds: 1–5

- Use steps 1 and 2 for page surfaces and subtle containers. Choose between
  them based on the amount of visual separation needed.
- Use step 3 for a component's normal background, step 4 for hover, and step 5
  for pressed or selected states.
- If a component is transparent at rest, step 3 can serve as its hover
  background.

### Borders: 6–8

- Use step 6 for quiet structure: separators and borders around cards,
  sidebars, headers, and other non-interactive regions.
- Use step 7 for the normal border of an interactive control.
- Use step 8 when that border needs more emphasis, including hover and focus
  treatment.

### Solid fills: 9–10

- Use step 9 for prominent filled controls, accent surfaces, graphics, logos,
  overlays, accent borders, and colored shadows.
- Use step 10 for the hover state of a step 9 fill.
- Most step 9 colors are intended to carry white foreground content. Amber and
  the other bright Radix scales called out in the source documentation require
  dark foreground content instead. Verify foreground contrast rather than
  assuming one text color works for every semantic family.

### Text: 11–12

- Use step 11 for secondary or lower-emphasis text.
- Use step 12 for primary, high-emphasis text.
- Within one Radix scale, steps 11 and 12 are designed to provide approximately
  APCA Lc 60 and Lc 90 respectively over step 2.

## Semantic families

| Semantic family | Radix scale | Meaning                             |
| --------------- | ----------- | ----------------------------------- |
| `neutral`       | Gray        | General surfaces, borders, and text |
| `primary`       | Blue        | Primary and accent actions          |
| `negative`      | Red         | Errors and destructive actions      |
| `warning`       | Amber       | Warnings and cautionary states      |
| `positive`      | Green       | Success and affirmative states      |

Every family provides opaque steps 1–12 and transparent alpha steps A1–A12.
Choose the same step number for the same UI role. Prefer an alpha token when the
color should blend with the surface beneath it; prefer an opaque token when the
result must not depend on the underlying background.

The tokens use CSS `light-dark()`. The consuming application controls their
appearance with `color-scheme`; this package does not set a global scheme.
