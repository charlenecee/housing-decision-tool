import React from "react";

/**
 * Backpack status pill. A small uppercase, tracked label with a leading dot,
 * tinted by meaning. The brand's core "where does this sit?" signal — used for
 * task states (ready / waiting / blocked) and item states (to-list / listed /
 * sold / donated). Color carries meaning; it is never decorative.
 */
const TONES = {
  ready:    { bg: "var(--sage-soft)", fg: "var(--sage)",            dot: "var(--sage)" },
  waiting:  { bg: "var(--gold-tint)", fg: "#93702f",                dot: "var(--gold)" },
  blocked:  { bg: "var(--coral-tint)", fg: "var(--coral)",          dot: "var(--coral)" },
  sold:     { bg: "var(--sage-soft)", fg: "var(--sage)",            dot: "var(--sage)" },
  donated:  { bg: "var(--sage-tint)", fg: "var(--sage)",            dot: "var(--sage)" },
  listed:   { bg: "#efe2d0",          fg: "var(--terracotta-deep)", dot: "var(--terracotta)" },
  "to-list":{ bg: "var(--sand-deep)", fg: "var(--ink-600)",         dot: "var(--ink-400)" },
  neutral:  { bg: "var(--sand-deep)", fg: "var(--ink-600)",         dot: "var(--ink-400)" },
};

export function StatusChip({ tone = "neutral", dot = true, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
      )}
      {children || tone}
    </span>
  );
}
