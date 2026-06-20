Soulful Backpack's bottom navigation — a frosted paper bar pinned to the bottom of a product surface; use it as the top-level switch between a product's main views (Focus, Sell It, Tasks, Looking back).

```jsx
import { TabBar } from "../components/tab-bar/TabBar";

const items = [
  { key: "focus", label: "Focus", icon: ({active}) => <FocusIcon strokeWidth={active ? 2 : 1.7} /> },
  { key: "sell",  label: "Sell It", icon: <TagIcon /> },
];

<TabBar items={items} active={tab} onChange={setTab} />
```

Notes
- Sits at the bottom of a `position: relative` / flex-column surface; it does not float by itself.
- Active item is terracotta; inactive is taupe. Keep labels to one short word.
- The icon prop accepts a node or a `({ active }) => node` function so the icon can thicken its stroke when selected.
