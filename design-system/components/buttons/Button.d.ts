import * as React from "react";

/**
 * Backpack primary action. Pill button in terracotta with a soft warm glow.
 *
 * @startingPoint section="Components" subtitle="Primary / ghost / link pill button" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: "primary" | "ghost" | "link";
  /** Disabled state — desaturates to sand, drops the glow. */
  disabled?: boolean;
  /** Stretch to container width (primary/ghost). */
  full?: boolean;
  /** Optional leading icon node (inherits currentColor). */
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
