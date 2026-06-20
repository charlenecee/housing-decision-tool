Soulful Backpack's surface primitive — a white card floating on warm paper; use plain mode for a single block of content and `rows` mode for a list of items divided by hairlines (tasks, marketplace items).

```jsx
import { Card, CardRow } from "../components/card/Card";

<Card>
  <p>A single block of content.</p>
</Card>

<Card rows>
  <CardRow>Photograph 5 items</CardRow>
  <CardRow>Contact property manager</CardRow>
</Card>
```

Notes
- White is reserved for cards; the page underneath is always warm paper.
- Shadow is low, warm, and diffuse — never gray or hard.
- In `rows` mode each row after the first should carry a 1px `--border-soft` divider (the app draws it with a `::before`).
