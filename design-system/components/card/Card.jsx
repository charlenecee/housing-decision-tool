import React from "react";

/**
 * Backpack surface. A white card floating on warm paper with a hairline border
 * and a low, warm, diffuse shadow. Content-first: no built-in header. Use
 * `rows` to render a list with the brand's 1px hairline dividers between items.
 */
export function Card({ rows = false, padded = true, children, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-card)",
        border: "1px solid var(--border-soft)",
        boxShadow: "var(--shadow-card)",
        padding: rows ? "2px 0" : padded ? "18px" : 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * A single row inside a <Card rows>. Renders a hairline divider above every row
 * after the first.
 */
export function CardRow({ children, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 18px",
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
