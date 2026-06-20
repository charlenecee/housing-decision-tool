import * as React from "react";

/**
 * Backpack surface — white card on warm paper, hairline border, low warm shadow.
 *
 * @startingPoint section="Components" subtitle="White card surface with hairline rows" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a row list (padding collapses; use <CardRow> children with hairline dividers). */
  rows?: boolean;
  /** Apply default 18px padding when not in rows mode. Default true. */
  padded?: boolean;
  children?: React.ReactNode;
}

export interface CardRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
export function CardRow(props: CardRowProps): JSX.Element;
