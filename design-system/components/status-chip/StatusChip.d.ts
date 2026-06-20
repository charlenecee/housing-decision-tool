import * as React from "react";

/**
 * Backpack status pill — uppercase tracked label with a leading dot, tinted by
 * meaning. Used for task and marketplace-item states. Color carries meaning.
 *
 * @startingPoint section="Components" subtitle="Tinted status pill with dot" viewport="700x140"
 */
export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Meaning of the chip. Drives tint. Default "neutral". */
  tone?: "ready" | "waiting" | "blocked" | "sold" | "donated" | "listed" | "to-list" | "neutral";
  /** Show the leading dot. Default true. */
  dot?: boolean;
  /** Label text. Defaults to the tone name. */
  children?: React.ReactNode;
}

export function StatusChip(props: StatusChipProps): JSX.Element;
