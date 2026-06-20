Soulful Backpack's primary action — a terracotta pill for the one thing you want the user to do on a screen; use `ghost` for quiet secondary actions and `link` for inline text actions.

```jsx
import { Button } from "../components/buttons/Button";

<Button variant="primary" full onClick={begin}>Save &amp; begin</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="link" iconLeft={<PlusIcon />}>Add a task</Button>
```

Notes
- `primary` carries a soft terracotta glow (`--shadow-action`) and presses with a 1px settle. Disabled desaturates to sand and drops the glow.
- Only ONE primary per view. Everything else is ghost or link.
- Label copy is sentence case, discovery-framed, no em dashes.
