Soulful Backpack's status pill — use it anywhere the user needs to know "where does this sit?" (task states, marketplace-item states); the tone prop carries the meaning, so never pick a tone for looks alone.

```jsx
import { StatusChip } from "../components/status-chip/StatusChip";

<StatusChip tone="ready">Ready</StatusChip>
<StatusChip tone="waiting">Waiting 3 days</StatusChip>
<StatusChip tone="sold">Sold</StatusChip>
```

Notes
- Tones: `ready` `waiting` `blocked` (tasks) and `to-list` `listed` `sold` `donated` (items), plus `neutral`.
- Always uppercase + tracked; the leading dot can be hidden with `dot={false}`.
- Label copy stays short and factual; no em dashes.
