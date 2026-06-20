import React from "react";

/**
 * Soulful Backpack bottom sheet. A scrim plus a paper panel that rises from the
 * bottom of a product surface, with a grip handle and a scrollable body. Tapping
 * the scrim closes it.
 *
 * IMPORTANT (brand motion rule): the sheet's resting, visible state IS the base
 * style. There is no entrance animation that starts from hidden, because a
 * throttled animation timeline can freeze at frame 0 and leave the sheet
 * invisible. It appears instantly. Keep it that way.
 */
export function BottomSheet({ open, onClose, grip = true, maxHeight = "86%", children, bodyStyle }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 80,
        background: "rgba(34,27,23,0.34)",
        display: "flex",
        alignItems: "flex-end",
        opacity: 1,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxHeight,
          background: "var(--bg)",
          borderRadius: "28px 28px 0 0",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "var(--shadow-sheet)",
          transform: "none",
        }}
      >
        {grip && (
          <div
            style={{
              width: 40,
              height: 5,
              borderRadius: 999,
              background: "var(--border)",
              margin: "10px auto 4px",
              flexShrink: 0,
            }}
          />
        )}
        <div style={{ overflowY: "auto", padding: "8px 22px 26px", ...bodyStyle }}>{children}</div>
      </div>
    </div>
  );
}
