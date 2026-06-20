import React from "react";

/**
 * Soulful Backpack bottom tab bar. A frosted, paper-tinted bar pinned to the
 * bottom of a product surface. Each item is an icon over a short label; the
 * active item turns terracotta. Icons may be a node or a render function that
 * receives { active } so they can thicken their stroke when selected.
 */
export function TabBar({ items = [], active, onChange }) {
  return (
    <nav
      style={{
        flexShrink: 0,
        position: "relative",
        zIndex: 30,
        display: "flex",
        alignItems: "stretch",
        padding: "8px 14px 30px",
        background: "rgba(248,241,233,0.92)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        borderTop: "1px solid var(--border-soft)",
      }}
    >
      {items.map((it) => {
        const isActive = it.key === active;
        const icon = typeof it.icon === "function" ? it.icon({ active: isActive }) : it.icon;
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange && onChange(it.key)}
            style={{
              flex: 1,
              appearance: "none",
              border: "none",
              background: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "6px 0",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: isActive ? "var(--action)" : "var(--text-muted)",
              transition: "color .2s ease",
            }}
          >
            {icon}
            <span>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
