import * as React from "react";

export interface TabItem {
  /** Stable id for the tab; compared against `active`. */
  key: string;
  /** Short label under the icon. */
  label: string;
  /** Icon node, or a render fn given { active } so it can thicken when selected. */
  icon?: React.ReactNode | ((state: { active: boolean }) => React.ReactNode);
}

/**
 * Soulful Backpack bottom tab bar — frosted paper bar, active item in terracotta.
 *
 * @startingPoint section="Components" subtitle="Frosted bottom navigation bar" viewport="402x96"
 */
export interface TabBarProps {
  /** Tabs to render, left to right. */
  items: TabItem[];
  /** Key of the currently active tab. */
  active: string;
  /** Called with the tapped tab's key. */
  onChange?: (key: string) => void;
}

export function TabBar(props: TabBarProps): JSX.Element;
