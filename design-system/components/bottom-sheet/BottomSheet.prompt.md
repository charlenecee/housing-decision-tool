Soulful Backpack's bottom sheet — use it for focused, dismissible tasks layered over a product surface (the Item Story, the Backpack reflection, add-a-task); the scrim closes it, the body scrolls.

```jsx
import { BottomSheet } from "../components/bottom-sheet/BottomSheet";

<BottomSheet open={storyOpen} onClose={() => setStoryOpen(false)}>
  <h2>Orange reading chair</h2>
  {/* prompts, fields, a primary action */}
</BottomSheet>
```

Notes
- It is positioned `absolute inset:0`, so it fills the nearest `position: relative` ancestor (the phone surface), not the whole page.
- **Appears instantly, by design.** Do not add an entrance animation that starts from opacity:0 or translateY, the preview can freeze it hidden. The visible state is the base.
- Put one primary action at the bottom of the body; everything else is ghost/link.
