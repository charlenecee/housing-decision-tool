import * as React from "react";

/**
 * Soulful Backpack bottom sheet — scrim + paper panel rising from the bottom of
 * a surface, with grip and scrollable body. Appears instantly (no hidden-start
 * animation, by brand rule).
 *
 * @startingPoint section="Components" subtitle="Bottom sheet with scrim + grip" viewport="402x520"
 */
export interface BottomSheetProps {
  /** Whether the sheet is shown. When false the component renders nothing. */
  open: boolean;
  /** Called when the scrim is tapped. */
  onClose?: () => void;
  /** Show the grip handle. Default true. */
  grip?: boolean;
  /** Max height of the panel (CSS length). Default "86%". */
  maxHeight?: string;
  /** Extra style merged onto the scrollable body. */
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export function BottomSheet(props: BottomSheetProps): JSX.Element | null;
