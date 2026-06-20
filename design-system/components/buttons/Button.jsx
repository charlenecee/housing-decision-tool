import React from "react";

/**
 * Backpack primary action. A pill button in terracotta with a soft warm glow.
 * Variants: primary (default), ghost (quiet text-weight), link (inline terracotta).
 */
export function Button({
  variant = "primary",
  type = "button",
  disabled = false,
  full = false,
  iconLeft = null,
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    appearance: "none",
    border: "none",
    cursor: disabled ? "default" : "pointer",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    whiteSpace: "nowrap",
    transition:
      "transform var(--dur-quick) ease, background .25s ease, color .2s ease, box-shadow .25s ease",
  };

  const variants = {
    primary: {
      fontSize: "var(--text-ui)",
      color: "var(--text-on-accent)",
      background: disabled ? "var(--bg-pressed)" : "var(--action)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 22px",
      boxShadow: disabled ? "none" : "var(--shadow-action)",
      width: full ? "100%" : undefined,
    },
    ghost: {
      fontSize: "var(--text-ui)",
      fontWeight: 600,
      color: "var(--text-muted)",
      background: "transparent",
      padding: "10px 12px",
      borderRadius: "var(--radius-pill)",
      width: full ? "100%" : undefined,
    },
    link: {
      fontSize: "var(--text-ui)",
      color: "var(--action)",
      background: "none",
      padding: 0,
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
    </button>
  );
}
