/* @ds-bundle: {"format":3,"namespace":"SoulfulBackpackDesignSystem_81b485","components":[{"name":"BottomSheet","sourcePath":"components/bottom-sheet/BottomSheet.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/card/Card.jsx"},{"name":"CardRow","sourcePath":"components/card/Card.jsx"},{"name":"StatusChip","sourcePath":"components/status-chip/StatusChip.jsx"},{"name":"TabBar","sourcePath":"components/tab-bar/TabBar.jsx"}],"sourceHashes":{"components/bottom-sheet/BottomSheet.jsx":"cab126b961be","components/buttons/Button.jsx":"02888977e7c4","components/card/Card.jsx":"c63d74aec93a","components/status-chip/StatusChip.jsx":"9545c897ba1f","components/tab-bar/TabBar.jsx":"7f901a78559b","ui_kits/help-me-move/app/FocusTab.jsx":"db5cd19eb2c5","ui_kits/help-me-move/app/ItemStory.jsx":"b0501b13117e","ui_kits/help-me-move/app/Onboarding.jsx":"6c101977d6d8","ui_kits/help-me-move/app/RetroTab.jsx":"216e8f8b1316","ui_kits/help-me-move/app/SellTab.jsx":"4bae1a7e20a0","ui_kits/help-me-move/app/TasksTab.jsx":"424b005a270e","ui_kits/help-me-move/app/data.js":"94773ebdac81","ui_kits/help-me-move/app/icons.jsx":"b0b9fac70826","ui_kits/help-me-move/backpack/Backpack.jsx":"22483245432e","ui_kits/help-me-move/backpack/Focus.jsx":"974d379f2d3b","ui_kits/help-me-move/backpack/Retro.jsx":"145e8074b76e","ui_kits/help-me-move/backpack/shared.jsx":"53034de6e07a","ui_kits/help-me-move/backpack/thread-data.js":"ef304cdc370b","ui_kits/help-me-move/frames/design-canvas.jsx":"bd8746af6e58","ui_kits/help-me-move/frames/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SoulfulBackpackDesignSystem_81b485 = window.SoulfulBackpackDesignSystem_81b485 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/bottom-sheet/BottomSheet.jsx
try { (() => {
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
function BottomSheet({
  open,
  onClose,
  grip = true,
  maxHeight = "86%",
  children,
  bodyStyle
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 80,
      background: "rgba(34,27,23,0.34)",
      display: "flex",
      alignItems: "flex-end",
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxHeight,
      background: "var(--bg)",
      borderRadius: "28px 28px 0 0",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "var(--shadow-sheet)",
      transform: "none"
    }
  }, grip && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 999,
      background: "var(--border)",
      margin: "10px auto 4px",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: "8px 22px 26px",
      ...bodyStyle
    }
  }, children)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bottom-sheet/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Backpack primary action. A pill button in terracotta with a soft warm glow.
 * Variants: primary (default), ghost (quiet text-weight), link (inline terracotta).
 */
function Button({
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
    transition: "transform var(--dur-quick) ease, background .25s ease, color .2s ease, box-shadow .25s ease"
  };
  const variants = {
    primary: {
      fontSize: "var(--text-ui)",
      color: "var(--text-on-accent)",
      background: disabled ? "var(--bg-pressed)" : "var(--action)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 22px",
      boxShadow: disabled ? "none" : "var(--shadow-action)",
      width: full ? "100%" : undefined
    },
    ghost: {
      fontSize: "var(--text-ui)",
      fontWeight: 600,
      color: "var(--text-muted)",
      background: "transparent",
      padding: "10px 12px",
      borderRadius: "var(--radius-pill)",
      width: full ? "100%" : undefined
    },
    link: {
      fontSize: "var(--text-ui)",
      color: "var(--action)",
      background: "none",
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Backpack surface. A white card floating on warm paper with a hairline border
 * and a low, warm, diffuse shadow. Content-first: no built-in header. Use
 * `rows` to render a list with the brand's 1px hairline dividers between items.
 */
function Card({
  rows = false,
  padded = true,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--shadow-card)",
      padding: rows ? "2px 0" : padded ? "18px" : 0,
      ...style
    }
  }, rest), children);
}

/**
 * A single row inside a <Card rows>. Renders a hairline divider above every row
 * after the first.
 */
function CardRow({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 18px",
      position: "relative",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/status-chip/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Backpack status pill. A small uppercase, tracked label with a leading dot,
 * tinted by meaning. The brand's core "where does this sit?" signal — used for
 * task states (ready / waiting / blocked) and item states (to-list / listed /
 * sold / donated). Color carries meaning; it is never decorative.
 */
const TONES = {
  ready: {
    bg: "var(--sage-soft)",
    fg: "var(--sage)",
    dot: "var(--sage)"
  },
  waiting: {
    bg: "var(--gold-tint)",
    fg: "#93702f",
    dot: "var(--gold)"
  },
  blocked: {
    bg: "var(--coral-tint)",
    fg: "var(--coral)",
    dot: "var(--coral)"
  },
  sold: {
    bg: "var(--sage-soft)",
    fg: "var(--sage)",
    dot: "var(--sage)"
  },
  donated: {
    bg: "var(--sage-tint)",
    fg: "var(--sage)",
    dot: "var(--sage)"
  },
  listed: {
    bg: "#efe2d0",
    fg: "var(--terracotta-deep)",
    dot: "var(--terracotta)"
  },
  "to-list": {
    bg: "var(--sand-deep)",
    fg: "var(--ink-600)",
    dot: "var(--ink-400)"
  },
  neutral: {
    bg: "var(--sand-deep)",
    fg: "var(--ink-600)",
    dot: "var(--ink-400)"
  }
};
function StatusChip({
  tone = "neutral",
  dot = true,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot,
      flexShrink: 0
    }
  }), children || tone);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status-chip/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/tab-bar/TabBar.jsx
try { (() => {
/**
 * Soulful Backpack bottom tab bar. A frosted, paper-tinted bar pinned to the
 * bottom of a product surface. Each item is an icon over a short label; the
 * active item turns terracotta. Icons may be a node or a render function that
 * receives { active } so they can thicken their stroke when selected.
 */
function TabBar({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      flexShrink: 0,
      position: "relative",
      zIndex: 30,
      display: "flex",
      alignItems: "stretch",
      padding: "8px 14px 30px",
      background: "rgba(248,241,233,0.92)",
      backdropFilter: "blur(14px) saturate(160%)",
      WebkitBackdropFilter: "blur(14px) saturate(160%)",
      borderTop: "1px solid var(--border-soft)"
    }
  }, items.map(it => {
    const isActive = it.key === active;
    const icon = typeof it.icon === "function" ? it.icon({
      active: isActive
    }) : it.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
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
        transition: "color .2s ease"
      }
    }, icon, /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tab-bar/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/FocusTab.jsx
try { (() => {
/* Focus tab — one task at a time.
   States: default (top ready task), resurfacing (task stuck 3+ days brings the
   backpack words back), mark-done advances, all-clear when nothing is ready. */

function FocusTab({
  tasks,
  onDone,
  why,
  onOpenBackpack,
  onGoTasks
}) {
  const I = window.Icon;
  const ready = tasks.filter(t => t.status === 'ready' && !t.done);
  const [idx, setIdx] = React.useState(0);
  const [dismissed, setDismissed] = React.useState(false);
  const waiting = tasks.filter(t => t.status === 'waiting' && !t.done).length;
  const blocked = tasks.filter(t => t.status === 'blocked' && !t.done).length;
  if (ready.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pad",
      style: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rise d2",
      style: {
        marginTop: 40,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        margin: '0 auto',
        background: 'var(--sage-tint)',
        color: 'var(--sage)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.check, {
      size: 26,
      stroke: 2
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--serif)',
        fontWeight: 500,
        fontSize: 24,
        margin: '20px 0 0'
      }
    }, "Nothing is waiting on you right now."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--ink-soft)',
        margin: '12px auto 0',
        maxWidth: '30ch'
      }
    }, "You have cleared every ready task. ", waiting + blocked > 0 ? `${waiting} ${waiting === 1 ? 'item is' : 'items are'} waiting on other people, and that is fine.` : 'That is the whole list.'), /*#__PURE__*/React.createElement("button", {
      className: "hm-btn",
      onClick: onGoTasks,
      style: {
        marginTop: 22,
        height: 50,
        padding: '0 24px',
        fontSize: 15
      }
    }, "See what is waiting")));
  }
  const cur = ready[Math.min(idx, ready.length - 1)];
  const showResurface = !dismissed && (cur.waitingDays || 0) >= 3;
  return /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, showResurface && /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      marginTop: 8,
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)',
      padding: '16px 18px 16px 22px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 16,
      bottom: 16,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--sage), rgba(46,122,77,0.16))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.diamond, {
    size: 15,
    stroke: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      color: 'var(--sage)'
    }
  }, "From your backpack")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '11px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "This one has been waiting ", cur.waitingDays, " days. When you started, you wrote:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '9px 0 0',
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, "\u201C", why, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "link",
    style: {
      color: 'var(--sage)'
    },
    onClick: onOpenBackpack
  }, "Open my backpack"), /*#__PURE__*/React.createElement("button", {
    className: "link",
    style: {
      color: 'var(--muted)'
    },
    onClick: () => setDismissed(true)
  }, "Thanks, I am ready"))), /*#__PURE__*/React.createElement("div", {
    className: "card rise d2",
    style: {
      marginTop: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-ready"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "READY"), (cur.waitingDays || 0) > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, "waiting ", cur.waitingDays, " ", cur.waitingDays === 1 ? 'day' : 'days')), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--sans)',
      fontWeight: 800,
      fontSize: 21,
      lineHeight: 1.2
    }
  }, cur.title), cur.why && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, cur.why), cur.recovery && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 14px',
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.tag, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 19,
      color: 'var(--sage)'
    }
  }, window.HMM_fmt(cur.recovery)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      lineHeight: 1.35
    }
  }, "estimated recovery, offsetting your monthly draw")), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    onClick: () => {
      onDone(cur.id);
      setIdx(0);
    },
    style: {
      marginTop: 16,
      width: '100%',
      height: 52,
      fontSize: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 18,
    stroke: 2
  }), " Mark done"), ready.length > 1 && /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setIdx((idx + 1) % ready.length),
    style: {
      width: '100%',
      height: 38,
      marginTop: 4,
      fontSize: 13.5
    }
  }, "Show me something easier")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, ready.length, " ready \xB7 ", waiting, " waiting \xB7 ", blocked, " blocked"));
}
window.FocusTab = FocusTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/FocusTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/ItemStory.jsx
try { (() => {
/* Item Story sheet (B-06) — a per-item emotional record.
   Two parts: Before (3 prompts, visible while to-list / listed) and After
   (1 prompt, unlocked once sold / donated). Conversational, never clinical.
   No grades, no scores. Just the user's own words. No em dashes. */

function ItemStory({
  item,
  why,
  onClose,
  onSave,
  onDelete
}) {
  const I = window.Icon;
  const fmt = window.HMM_fmt;
  const s0 = item.story || {};
  const [q1, setQ1] = React.useState(s0.q1 || '');
  const [q2, setQ2] = React.useState(s0.q2 || '');
  const [q3, setQ3] = React.useState(s0.q3 || '');
  const [after, setAfter] = React.useState(s0.after || '');
  const [confirmDel, setConfirmDel] = React.useState(false);
  const gone = item.status === 'sold' || item.status === 'donated';
  function commit() {
    onSave(item.id, {
      q1,
      q2,
      q3,
      after
    });
    onClose();
  }
  const chip = {
    'to-list': ['chip-tolist', 'TO LIST'],
    listed: ['chip-listed', 'LISTED'],
    sold: ['chip-sold', 'SOLD'],
    donated: ['chip-donated', 'DONATED']
  }[item.status];
  const valueLine = item.status === 'sold' ? `Sold for ${fmt(item.soldPrice)}` : item.status === 'donated' ? 'Donated' : item.status === 'listed' ? `Listed at ${fmt(item.listed)}` : `Worth about ${fmt(item.estLo)}–${fmt(item.estHi)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grip"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'chip ' + chip[0]
  }, chip[1]), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: onClose,
    style: {
      fontSize: 14,
      padding: '4px 2px'
    }
  }, "Done")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.15
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      color: 'var(--muted)'
    }
  }, valueLine), why && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '13px 15px 13px 17px',
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-field)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 13,
      bottom: 13,
      width: 3.5,
      borderRadius: 4,
      background: 'var(--sage)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "\u201C", why, "\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "Before you let it go")), /*#__PURE__*/React.createElement(StoryField, {
    label: "What is this? Where did it come from?",
    value: q1,
    onChange: setQ1,
    placeholder: "It came from\u2026"
  }), /*#__PURE__*/React.createElement(StoryField, {
    label: "Why have you kept it this long?",
    value: q2,
    onChange: setQ2,
    placeholder: "I kept it because\u2026"
  }), /*#__PURE__*/React.createElement(StoryField, {
    label: "What would it mean to let it go?",
    value: q3,
    onChange: setQ3,
    placeholder: "Letting it go would mean\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead",
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-ic",
    style: {
      color: gone ? 'var(--sage)' : 'var(--muted)'
    }
  }, gone ? /*#__PURE__*/React.createElement(I.heart, {
    size: 15,
    fill: true
  }) : /*#__PURE__*/React.createElement(I.lock, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "After it is gone")), gone ? /*#__PURE__*/React.createElement(StoryField, {
    label: "How do you actually feel now that it is gone?",
    value: after,
    onChange: setAfter,
    placeholder: "Honestly, I feel\u2026"
  }) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--muted)'
    }
  }, "This question opens once the item is sold or donated. No rush."), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    onClick: commit,
    style: {
      marginTop: 24,
      width: '100%',
      height: 52,
      fontSize: 15.5
    }
  }, "Save this story"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 2px 0',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--muted)',
      textAlign: 'center'
    }
  }, "Private to you. Never shared, never scored."), onDelete && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 16,
      borderTop: '1px solid var(--line-soft)'
    }
  }, confirmDel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--ink-soft)'
    }
  }, "Remove this item from the tracker?"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setConfirmDel(false),
    style: {
      fontSize: 13.5
    }
  }, "Keep"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => {
      onDelete(item.id);
      onClose();
    },
    style: {
      fontSize: 13.5,
      fontWeight: 800,
      color: 'var(--coral)'
    }
  }, "Remove")) : /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setConfirmDel(true),
    style: {
      width: '100%',
      height: 40,
      fontSize: 13,
      color: 'var(--muted)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(I.trash, {
    size: 15
  }), " Remove from tracker")))));
}
function StoryField({
  label,
  value,
  onChange,
  placeholder
}) {
  const ref = window.useAutoGrow(value, 160);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "prompt-q"
  }, label), /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    className: "story-input",
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    style: {
      minHeight: 46
    }
  }));
}
window.ItemStory = ItemStory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/ItemStory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/Onboarding.jsx
try { (() => {
/* The Backpack onboarding (B-29) — shown once on first open, before any tasks.
   A single full-screen prompt: "Why are you moving, really?" Freeform, no
   limit, no required format. Saved once and carried everywhere. Plus the
   BackpackSheet overlay that Focus opens when a task has been stuck.
   Discovery framing, never loss framing. No em dashes. */

function MarkBp({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      transform: 'rotate(45deg)',
      borderRadius: 3,
      background: 'var(--sage-soft)',
      border: '1.5px solid var(--sage)'
    }
  });
}
function Onboarding({
  onSave
}) {
  const [text, setText] = React.useState(window.HMM_WHY || '');
  const ref = window.useAutoGrow(text, 240);
  const canSave = text.trim().length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "app",
    style: {
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '64px 24px 26px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MarkBp, null), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "The Backpack")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "Before we start")), /*#__PURE__*/React.createElement("div", {
    className: "rise d2",
    style: {
      marginTop: 22,
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)',
      padding: '24px 22px 24px 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 18,
      bottom: 18,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--terracotta), rgba(189,106,60,0.15))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 15.5,
      lineHeight: 1.5,
      color: 'var(--sage)'
    }
  }, "A move is more than boxes."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.16,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, "Why are you moving, really?")), /*#__PURE__*/React.createElement("p", {
    className: "rise d3",
    style: {
      margin: '20px 2px 0',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "Write whatever comes to mind. There are no wrong answers, and you can change it whenever you like. We will bring it back when a step feels heavy."), /*#__PURE__*/React.createElement("div", {
    className: "rise d4",
    style: {
      marginTop: 16,
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '14px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 8px'
    }
  }, "In your own words"), /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    className: "hm-field",
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "This move is about\u2026",
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 16,
      lineHeight: 1.62,
      flex: 1,
      minHeight: 110
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rise d5",
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    disabled: !canSave,
    onClick: () => onSave(text.trim()),
    style: {
      width: '100%',
      height: 54,
      fontSize: 16
    }
  }, "Save & begin"))));
}

/* Overlay sheet — the saved backpack, openable + editable from anywhere. */
function BackpackSheet({
  why,
  onClose,
  onSave,
  onStartOver
}) {
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(why);
  const ref = window.useAutoGrow(draft, 280);
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grip"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(MarkBp, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "Your backpack")), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: onClose,
    style: {
      fontSize: 14,
      padding: '4px 2px'
    }
  }, "Close")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.2
    }
  }, "This is what you came here to do."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '16px 16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 10px'
    }
  }, "Why you are moving"), editing ? /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    className: "hm-field",
    value: draft,
    onChange: e => setDraft(e.target.value),
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--ink)',
      width: '100%',
      minHeight: 120
    }
  }) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--ink)',
      whiteSpace: 'pre-wrap'
    }
  }, why)), editing ? /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    onClick: () => {
      onSave(draft.trim() || why);
      setEditing(false);
    },
    style: {
      marginTop: 18,
      width: '100%',
      height: 50,
      fontSize: 15.5
    }
  }, "Save changes") : /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setEditing(true),
    style: {
      marginTop: 16,
      width: '100%',
      height: 44,
      fontSize: 14,
      fontWeight: 700
    }
  }, "Edit this"), onStartOver && !editing && /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: onStartOver,
    style: {
      marginTop: 4,
      width: '100%',
      height: 38,
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, "Start the demo over"))));
}
window.Onboarding = Onboarding;
window.BackpackSheet = BackpackSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/RetroTab.jsx
try { (() => {
/* Retrospective tab (S1-25) — the final chapter of the move story.
   Four things in one scroll: the opening anchor (unedited), the numbers,
   the decisions (each with financial + Item Story), and the closing feeling
   that sits beside the opening. The gap between them is the story.
   No scores, no grades, no AI reading of feelings. No em dashes. */

function RetroTab({
  items,
  why,
  whyNow,
  onWriteNow,
  onOpenStory
}) {
  const I = window.Icon;
  const fmt = window.HMM_fmt;
  const fin = window.HMM_FIN;
  const letGo = items.filter(i => i.status === 'sold' || i.status === 'donated').sort((a, b) => dayNum(a.date) - dayNum(b.date));
  const recovered = items.filter(i => i.status === 'sold').reduce((s, i) => s + (i.soldPrice || 0), 0);
  const cost = fin.moveCost;
  const net = cost - recovered;
  const daysBack = Math.round(recovered / fin.dailyBurn);
  return /*#__PURE__*/React.createElement("div", {
    className: "pad",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '14px 0 0'
    }
  }, "Here is why you said you were moving"), /*#__PURE__*/React.createElement(Quote, {
    text: why,
    accent: "var(--terracotta)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-ic"
  }, /*#__PURE__*/React.createElement(I.tag, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "The move, in numbers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: fmt(recovered),
    label: "Recovered from Marketplace",
    color: "var(--sage)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: fmt(cost),
    label: "What the move cost",
    color: "var(--coral)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: daysBack + ' days',
    label: "Of runway recovered",
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 12,
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-soft)'
    }
  }, "Net cost of the move"), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 19,
      color: 'var(--ink)'
    }
  }, fmt(net))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 4px 0',
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--muted)'
    }
  }, fmt(recovered), " back is about ", daysBack, " days off your ", fmt(fin.monthlyBurn), "/mo portfolio draw. Every dollar was already gone in your head."), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-ic"
  }, /*#__PURE__*/React.createElement(I.box, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "What you let go of")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '2px 18px'
    }
  }, letGo.map((it, i) => /*#__PURE__*/React.createElement(DecisionRow, {
    key: it.id,
    it: it,
    last: i === letGo.length - 1,
    onOpenStory: onOpenStory
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-ic",
    style: {
      color: 'var(--terracotta)'
    }
  }, /*#__PURE__*/React.createElement(I.heart, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      color: 'var(--terracotta)'
    }
  }, "And here is how you feel now")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 2px 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "You have moved. Compared to when you started, how do you feel? Write it next to the words you began with."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 14,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      bottom: 4,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--sage), rgba(46,122,77,0.18))'
    }
  }), /*#__PURE__*/React.createElement(NowField, {
    value: whyNow,
    onChange: onWriteNow
  })), whyNow && whyNow.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '16px 18px',
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "The distance between those two paragraphs is the whole move. You can keep this, print it, or just close it and carry it with you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }));
}
function Quote({
  text,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 18,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      bottom: 4,
      width: 4,
      borderRadius: 4,
      background: `linear-gradient(180deg, ${accent}, rgba(189,106,60,0.15))`
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, text));
}
function Stat({
  value,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '13px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 21,
      color,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontSize: 11,
      color: 'var(--muted)',
      lineHeight: 1.25
    }
  }, label));
}
function DecisionRow({
  it,
  last,
  onOpenStory
}) {
  const I = window.Icon;
  const fmt = window.HMM_fmt;
  const fate = it.status === 'sold' ? `Sold · ${fmt(it.soldPrice)}` : 'Donated';
  const note = it.story && (it.story.after || it.story.q1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0',
      borderBottom: last ? 'none' : '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      flexShrink: 0
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-soft)',
      minWidth: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      color: it.status === 'sold' ? 'var(--sage)' : 'var(--muted)',
      fontWeight: 700
    }
  }, fate)), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '9px 0 0',
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "\u201C", note, "\u201D") : /*#__PURE__*/React.createElement("button", {
    className: "link",
    onClick: () => onOpenStory(it.id),
    style: {
      marginTop: 9,
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 13,
    stroke: 2
  }), " Add its story"));
}
function NowField({
  value,
  onChange
}) {
  const ref = window.useAutoGrow(value, 240);
  return /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    className: "hm-field",
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: "When I started I wrote what I hoped for. Now that it is done, what is true is\u2026",
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.4,
      color: 'var(--ink)',
      minHeight: 84,
      width: '100%'
    }
  });
}
function dayNum(d) {
  const m = /(\d+)/.exec(d || '');
  return m ? parseInt(m[1], 10) : 0;
}
window.RetroTab = RetroTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/RetroTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/SellTab.jsx
try { (() => {
/* Sell It tab — the calculator + the Marketplace tracker.
   Calculator (B-14): "What haven't you used in the past year?" -> estimated
   recovery with burn-rate context -> Start tracking these.
   Tracker: items by status with running recovered total. Item Story opens
   via onOpenStory (rendered at the shell so it floats over the tab bar). */

function SellTab({
  items,
  onAddItems,
  onOpenStory
}) {
  const I = window.Icon;
  const fmt = window.HMM_fmt;
  const fin = window.HMM_FIN;
  const [step, setStep] = React.useState('prompt'); // prompt | results
  const [draft, setDraft] = React.useState('');
  const [results, setResults] = React.useState([]);
  const lines = draft.split('\n').map(s => s.trim()).filter(Boolean);
  function runEstimate() {
    const r = lines.map((name, i) => {
      const {
        lo,
        hi
      } = window.HMM_estimate(name);
      return {
        id: 'new-' + Date.now() + '-' + i,
        name,
        lo,
        hi
      };
    });
    setResults(r);
    setStep('results');
  }
  const totalLo = results.reduce((s, r) => s + r.lo, 0);
  const totalHi = results.reduce((s, r) => s + r.hi, 0);
  const midDays = (totalLo + totalHi) / 2 / fin.dailyBurn;
  function startTracking() {
    onAddItems(results.map(r => ({
      id: r.id,
      name: r.name,
      estLo: r.lo,
      estHi: r.hi,
      status: 'to-list'
    })));
    setDraft('');
    setResults([]);
    setStep('prompt');
  }

  // tracker tallies
  const recovered = items.filter(i => i.status === 'sold').reduce((s, i) => s + (i.soldPrice || 0), 0);
  const listedSum = items.filter(i => i.status === 'listed').reduce((s, i) => s + (i.listed || 0), 0);
  const order = {
    'to-list': 0,
    listed: 1,
    sold: 2,
    donated: 3
  };
  const sorted = [...items].sort((a, b) => order[a.status] - order[b.status]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 8,
      padding: 18,
      background: 'var(--sage-tint)',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.sparkle, {
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      color: 'var(--sage)'
    }
  }, "Find forgotten value")), step === 'prompt' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.2
    }
  }, "What haven\u2019t you used in the past year?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '9px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "List anything that comes to mind. Furniture, gear, clothes, whatever. One per line. You are just noticing what already feels gone."), /*#__PURE__*/React.createElement("textarea", {
    className: "story-input",
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: "Old road bike\nThe kayak in the garage\nFloor lamp",
    style: {
      marginTop: 12,
      minHeight: 96,
      background: 'rgba(255,255,255,0.7)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    disabled: lines.length === 0,
    onClick: runEstimate,
    style: {
      marginTop: 12,
      width: '100%',
      height: 50,
      fontSize: 15
    }
  }, "See what they could be worth")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.2
    }
  }, "These could recover"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 0 0',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 30,
      color: 'var(--sage)'
    }
  }, fmt(totalLo)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, "to"), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 30,
      color: 'var(--sage)'
    }
  }, fmt(totalHi))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "That is about ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, Math.round(midDays), " ", Math.round(midDays) === 1 ? 'day' : 'days'), " of your ", fmt(fin.monthlyBurn), "/mo portfolio draw. You are not losing these. You are turning what is already gone back into runway."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'rgba(255,255,255,0.6)',
      borderRadius: 12,
      padding: '4px 14px'
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '11px 0',
      borderBottom: i < results.length - 1 ? '1px solid var(--line-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink)',
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      paddingRight: 10
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 14.5,
      color: 'var(--sage)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, fmt(r.lo), "\u2013", fmt(r.hi))))), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    onClick: startTracking,
    style: {
      marginTop: 13,
      width: '100%',
      height: 50,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 17,
    stroke: 2
  }), " Start tracking these"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setStep('prompt'),
    style: {
      width: '100%',
      height: 36,
      marginTop: 4,
      fontSize: 13.5
    }
  }, "Back"))), /*#__PURE__*/React.createElement("div", {
    className: "sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-ic"
  }, /*#__PURE__*/React.createElement(I.tag, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "Marketplace tracker")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '16px 18px',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 24,
      color: 'var(--sage)',
      lineHeight: 1
    }
  }, fmt(recovered)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, "recovered so far")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--line-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 24,
      color: 'var(--terracotta)',
      lineHeight: 1
    }
  }, fmt(listedSum)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, "listed and pending")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--line-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 24,
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, Math.round(recovered / fin.dailyBurn), "d"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, "of runway recovered"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 12,
      padding: '2px 0'
    }
  }, sorted.map(it => /*#__PURE__*/React.createElement(TrackerRow, {
    key: it.id,
    it: it,
    onOpenStory: onOpenStory
  }))));
}
function TrackerRow({
  it,
  onOpenStory
}) {
  const I = window.Icon;
  const fmt = window.HMM_fmt;
  const chip = {
    'to-list': ['chip-tolist', 'TO LIST'],
    listed: ['chip-listed', 'LISTED'],
    sold: ['chip-sold', 'SOLD'],
    donated: ['chip-donated', 'DONATED']
  }[it.status];
  const value = it.status === 'sold' ? fmt(it.soldPrice) : it.status === 'listed' ? fmt(it.listed) : it.status === 'donated' ? 'Given' : fmt(it.estLo) + '–' + fmt(it.estHi);
  const valueColor = it.status === 'sold' ? 'var(--sage)' : it.status === 'listed' ? 'var(--terracotta)' : it.status === 'donated' ? 'var(--sage)' : 'var(--muted)';
  const hasStory = it.story && (it.story.q1 || it.story.after);
  return /*#__PURE__*/React.createElement("button", {
    className: "row",
    onClick: () => onOpenStory(it.id),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, it.name), hasStory && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.heart, {
    size: 13,
    fill: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'chip ' + chip[0]
  }, chip[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 16,
      color: valueColor,
      whiteSpace: 'nowrap'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "link",
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      whiteSpace: 'nowrap'
    }
  }, hasStory ? 'Story' : 'Add story', /*#__PURE__*/React.createElement(I.chevronRight, {
    size: 12
  }))));
}
window.SellTab = SellTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/SellTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/TasksTab.jsx
try { (() => {
/* All Tasks tab — the full list, grouped by status, plus a Done section and
   the ability to add or remove a task. PRD core requirement: every task has a
   status AND a reason. Discovery framing, calm tone. No em dashes. */

function TasksTab({
  tasks,
  onDone,
  onDelete,
  onRestore,
  onOpenAdd
}) {
  const I = window.Icon;
  const groups = [{
    key: 'ready',
    label: 'Ready now',
    tone: 'var(--sage)',
    blurb: 'These have nothing in their way. Start anywhere.'
  }, {
    key: 'waiting',
    label: 'Waiting',
    tone: '#c79431',
    blurb: 'Parked on purpose, for the right time or another person. Not your job yet.'
  }, {
    key: 'blocked',
    label: 'Blocked',
    tone: 'var(--coral)',
    blurb: 'Held by something upstream. Each one will unlock itself.'
  }];
  const chipClass = {
    ready: 'chip-ready',
    waiting: 'chip-waiting',
    blocked: 'chip-blocked'
  };
  const live = tasks.filter(t => !t.done);
  const done = tasks.filter(t => t.done);
  return /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 2px 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "Everything in one place, each with a reason it sits where it does. Nothing here is a surprise."), /*#__PURE__*/React.createElement("button", {
    className: "add-task",
    onClick: onOpenAdd,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 16,
    stroke: 2
  }), " Add a task"), groups.map(g => {
    const rows = live.filter(t => t.status === g.key);
    if (rows.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: g.key,
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sectionhead"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: g.tone,
        display: 'inline-block'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "hm-kicker",
      style: {
        color: g.tone
      }
    }, g.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--muted)',
        fontWeight: 700
      }
    }, "\xB7 ", rows.length)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 2px 12px',
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--muted)'
      }
    }, g.blurb), /*#__PURE__*/React.createElement("div", {
      className: "card",
      style: {
        padding: '2px 0'
      }
    }, rows.map(t => /*#__PURE__*/React.createElement(TaskRow, {
      key: t.id,
      t: t,
      chip: chipClass[g.key],
      canDo: g.key === 'ready',
      onDone: onDone,
      onDelete: onDelete
    }))));
  }), done.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I.checkCircle, {
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      color: 'var(--sage)'
    }
  }, "Done"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      fontWeight: 700
    }
  }, "\xB7 ", done.length)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 2px 12px',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--muted)'
    }
  }, "What you have already cleared this move. Proof you are further along than it feels."), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '2px 0'
    }
  }, done.map(t => /*#__PURE__*/React.createElement(DoneRow, {
    key: t.id,
    t: t,
    onRestore: onRestore,
    onDelete: onDelete
  })))));
}
function TaskRow({
  t,
  chip,
  canDo,
  onDone,
  onDelete
}) {
  const I = window.Icon;
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.3
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      display: open ? 'block' : '-webkit-box',
      WebkitLineClamp: open ? 'none' : 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, t.reason), t.reason && t.reason.length > 84 && /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setOpen(o => !o),
    style: {
      marginTop: 6,
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--muted)'
    }
  }, open ? 'Less' : 'Why')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'chip ' + chip
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), t.status.toUpperCase()), confirm ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, "Remove?"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setConfirm(false),
    style: {
      fontSize: 12.5
    }
  }, "No"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => onDelete(t.id),
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--coral)'
    }
  }, "Yes")) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, canDo && /*#__PURE__*/React.createElement("button", {
    className: "link",
    onClick: () => onDone(t.id),
    style: {
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 15,
    stroke: 2
  }), " Mark done"), /*#__PURE__*/React.createElement("button", {
    className: "row-act",
    title: "Remove task",
    onClick: () => setConfirm(true)
  }, /*#__PURE__*/React.createElement(I.trash, {
    size: 16
  })))));
}
function DoneRow({
  t,
  onRestore,
  onDelete
}) {
  const I = window.Icon;
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(I.checkCircle, {
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--muted)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--line)'
    }
  }, t.title)), confirm ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => setConfirm(false),
    style: {
      fontSize: 12.5
    }
  }, "No"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: () => onDelete(t.id),
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--coral)'
    }
  }, "Remove")) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "row-act",
    title: "Move back to active",
    onClick: () => onRestore(t.id),
    style: {
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement(I.undo, {
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "row-act",
    title: "Remove task",
    onClick: () => setConfirm(true)
  }, /*#__PURE__*/React.createElement(I.trash, {
    size: 16
  }))));
}

/* Add-a-task sheet — title, status, optional reason. Floats above the tab bar. */
function AddTaskSheet({
  onClose,
  onAdd
}) {
  const I = window.Icon;
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('ready');
  const [reason, setReason] = React.useState('');
  const ref = window.useAutoGrow(reason, 140);
  const canSave = title.trim().length > 0;
  const opts = [{
    key: 'ready',
    label: 'Ready',
    on: 'var(--sage)'
  }, {
    key: 'waiting',
    label: 'Waiting',
    on: '#c79431'
  }, {
    key: 'blocked',
    label: 'Blocked',
    on: 'var(--coral)'
  }];
  const fallback = {
    ready: 'Added by you. Nothing standing in its way.',
    waiting: 'Added by you. Parked until the right moment.',
    blocked: 'Added by you. Held until something upstream clears.'
  };
  function save() {
    onAdd({
      id: 't-' + Date.now(),
      title: title.trim(),
      status,
      waitingDays: 0,
      why: '',
      reason: reason.trim() || fallback[status]
    });
    onClose();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grip"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker"
  }, "Add a task"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: onClose,
    style: {
      fontSize: 14,
      padding: '4px 2px'
    }
  }, "Cancel")), /*#__PURE__*/React.createElement("p", {
    className: "prompt-q",
    style: {
      marginTop: 18
    }
  }, "What needs doing?"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: e => setTitle(e.target.value),
    autoFocus: true,
    placeholder: "e.g. Return the parking permit",
    className: "story-input",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "prompt-q",
    style: {
      marginTop: 20
    }
  }, "Where does it sit?"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.key,
    className: status === o.key ? 'on' : '',
    onClick: () => setStatus(o.key),
    style: status === o.key ? {
      background: o.on
    } : null
  }, o.label))), /*#__PURE__*/React.createElement("p", {
    className: "prompt-q",
    style: {
      marginTop: 20
    }
  }, "Why here? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontWeight: 400,
      fontSize: 13
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    value: reason,
    onChange: e => setReason(e.target.value),
    className: "story-input",
    placeholder: "A short reason, so future-you remembers.",
    style: {
      minHeight: 46
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    disabled: !canSave,
    onClick: save,
    style: {
      marginTop: 22,
      width: '100%',
      height: 52,
      fontSize: 15.5,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(I.plus, {
    size: 17,
    stroke: 2
  }), " Add to my list"))));
}
window.TasksTab = TasksTab;
window.AddTaskSheet = AddTaskSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/TasksTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/data.js
try { (() => {
/* Help Me Move — shared data model (plain JS, sets window globals).
   One source of truth: Focus, Sell It, All Tasks, and the Retrospective
   all read from these. No em dashes in any copy. */

/* The Backpack — the user's reason, carried everywhere. */
window.HMM_WHY = "I want to carry less into the next chapter. This house holds fifteen years and a marriage that ended, and I keep tripping over its furniture. I'm not running from any of it. I just want to choose what comes with me this time.";
window.HMM_NOW = "Lighter than I expected. I thought I'd grieve the things. Mostly I just feel like myself again.";

/* Finances (from the PRD financial context). */
window.HMM_FIN = {
  monthlyBurn: 6801,
  // Scenario A portfolio draw
  dailyBurn: 6801 / 30,
  moveCost: 2605,
  // 555 committed + 755 move-in + 1295 PM fee
  costBreakdown: [{
    label: "Committed (deposit, screening, application)",
    amount: 555
  }, {
    label: "July move-in deposits and fees",
    amount: 755
  }, {
    label: "Property manager placement (San Lorenzo)",
    amount: 1295
  }]
};

/* Tasks — every one has a status AND a reason (PRD core requirement). */
window.HMM_TASKS = [{
  id: 'photos',
  title: 'Photograph 5 items for Marketplace',
  status: 'ready',
  waitingDays: 3,
  why: 'Start with the things you have already let go of in your head. These could recover around $1,400, about six days of runway.',
  reason: 'The fastest dollars on the board. Most of these are already gone in your head.',
  recovery: 1400
}, {
  id: 'jobs',
  title: 'Research part-time jobs in the new area',
  status: 'ready',
  waitingDays: 0,
  why: 'A job is the one move that changes everything. Even a few hours of looking today is worth it.',
  reason: 'The single highest-leverage action. It swings your runway more than anything else here.'
}, {
  id: 'closet',
  title: 'Sort the closet: keep, sell, donate',
  status: 'ready',
  waitingDays: 1,
  why: 'Clothes are quick decisions and clear momentum. Most of this is already decided.',
  reason: 'Quick wins. Clear momentum without much weight.'
}, {
  id: 'pm',
  title: 'Contact the new property manager',
  status: 'waiting',
  waitingDays: 0,
  why: '',
  reason: 'Waiting on the apartment approval. There is nothing to do here until they confirm, and that is okay.'
}, {
  id: 'utilities',
  title: 'Transfer or cancel utilities',
  status: 'waiting',
  waitingDays: 0,
  why: '',
  reason: 'Best done about two weeks before move-out. Too early to action now, so it is parked.'
}, {
  id: 'address',
  title: 'Submit change of address',
  status: 'waiting',
  waitingDays: 0,
  why: '',
  reason: 'Do this once the move date is confirmed. Noted here so it will not slip.'
}, {
  id: 'movers',
  title: 'Book movers for the July date',
  status: 'blocked',
  waitingDays: 0,
  why: '',
  reason: 'Blocked until the lease is signed and a date is set. It will unlock itself.'
}];

/* Sell It items — estimated, listed, sold/donated, with optional Item Stories. */
window.HMM_ITEMS = [{
  id: 'chair',
  name: 'Orange reading chair',
  estLo: 100,
  estHi: 140,
  status: 'sold',
  listed: 130,
  soldPrice: 120,
  date: 'Jul 12',
  story: {
    q1: "I bought it when I moved into my first place alone. It has been with me twenty years.",
    q2: "It is comfortable, and it feels like me. Keeping it felt like keeping that version of myself.",
    q3: "Admitting that this chapter is really over.",
    after: "It sold on Saturday. I thought I would feel sad. Mostly I felt lighter. Someone else gets to make memories in it now."
  }
}, {
  id: 'table',
  name: 'The dining table',
  estLo: 150,
  estHi: 250,
  status: 'donated',
  date: 'Jul 9',
  story: {
    q1: "Our family table for fifteen years.",
    q2: "",
    q3: "",
    after: "Fifteen years of dinners. It is ready to hold new ones."
  }
}, {
  id: 'dresser',
  name: 'Oak dresser',
  estLo: 160,
  estHi: 240,
  status: 'sold',
  listed: 220,
  soldPrice: 200,
  date: 'Jul 11',
  story: null
}, {
  id: 'tv',
  name: 'Living room TV',
  estLo: 80,
  estHi: 120,
  status: 'sold',
  listed: 100,
  soldPrice: 90,
  date: 'Jul 6',
  story: null
}, {
  id: 'rug',
  name: 'Wool area rug',
  estLo: 90,
  estHi: 150,
  status: 'sold',
  listed: 120,
  soldPrice: 110,
  date: 'Jul 8',
  story: null
}, {
  id: 'desk',
  name: 'Standing desk',
  estLo: 120,
  estHi: 180,
  status: 'sold',
  listed: 160,
  soldPrice: 140,
  date: 'Jul 10',
  story: null
}, {
  id: 'bike',
  name: 'Road bike',
  estLo: 200,
  estHi: 300,
  status: 'listed',
  listed: 260
}, {
  id: 'lamp',
  name: 'Floor lamp',
  estLo: 25,
  estHi: 45,
  status: 'to-list'
}, {
  id: 'kayak',
  name: 'Kayak + paddle',
  estLo: 180,
  estHi: 280,
  status: 'to-list'
}];

/* Rough on-device estimator for the Sell It calculator (no network).
   Keyword lookup with a sensible fallback. Returns { lo, hi }. */
window.HMM_estimate = function (text) {
  const t = (text || '').toLowerCase();
  const table = [[/sofa|couch|sectional/, 180, 400], [/dining|table/, 120, 260], [/desk/, 90, 200], [/dresser|wardrobe|armoire/, 140, 280], [/chair|stool|recliner/, 60, 160], [/book ?shelf|shelf|bookcase/, 40, 120], [/bike|bicycle/, 150, 320], [/kayak|canoe|paddle ?board|surf/, 150, 350], [/tv|television|monitor/, 70, 220], [/lamp|light/, 20, 60], [/rug|carpet/, 60, 180], [/bed|mattress|frame/, 120, 350], [/camera|lens/, 100, 400], [/console|playstation|xbox|nintendo/, 120, 300], [/grill|bbq/, 80, 220], [/plant|planter|pot/, 10, 50], [/clothes|jacket|coat|dress|shoes|boots/, 15, 80], [/kitchen|blender|mixer|pan|cookware/, 25, 120]];
  for (const [re, lo, hi] of table) if (re.test(t)) return {
    lo,
    hi
  };
  // fallback scales gently with description length
  const base = Math.min(120, 25 + t.length);
  return {
    lo: Math.round(base * 0.6),
    hi: Math.round(base * 1.6)
  };
};
window.HMM_fmt = function (n) {
  return '$' + Math.round(n).toLocaleString('en-US');
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/app/icons.jsx
try { (() => {
/* Help Me Move — line icon set.
   Minimal, consistent: 24×24 viewBox, currentColor stroke, round caps.
   Kept simple and geometric. Exported to window.Icon.  */

function mkIcon(paths) {
  return function Icon({
    size = 22,
    stroke = 1.7,
    style,
    fill = false
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        display: 'block',
        flexShrink: 0,
        ...style
      }
    }, /*#__PURE__*/React.createElement("g", {
      stroke: "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: fill ? 'currentColor' : 'none'
    }, paths));
  };
}
const Icon = {
  // Focus — a target
  focus: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }))),
  // Sell — a price tag
  tag: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4h7l7.5 7.5a1.5 1.5 0 0 1 0 2.1l-5.9 5.9a1.5 1.5 0 0 1-2.1 0L4 12.5z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }))),
  // Tasks — a checklist
  list: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6.5h11M9 12h11M9 17.5h11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.6 6.3l1 1 1.6-1.9M3.6 11.8l1 1 1.6-1.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4.6",
    cy: "17.5",
    r: "0.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17.5h.02"
  }))),
  // Backpack reflection — the diamond mark, as a line
  diamond: mkIcon(/*#__PURE__*/React.createElement("rect", {
    x: "7.5",
    y: "7.5",
    width: "9",
    height: "9",
    rx: "2",
    transform: "rotate(45 12 12)"
  })),
  check: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M4.5 12.5l4.5 4.5L19.5 6.5"
  })),
  checkCircle: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.3l2.6 2.6L16.2 9"
  }))),
  camera: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8.5a2 2 0 0 1 2-2H7l1.2-1.6h7.6L17 6.5h1.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12.5",
    r: "3.2"
  }))),
  arrowRight: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M4 12h15M13 6l6 6-6 6"
  })),
  chevronRight: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  })),
  plus: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  sparkle: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M12 3.5c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6z"
  })),
  // Retrospective — history / looking back
  history: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 12a7.5 7.5 0 1 0 2.3-5.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.2 4.5v3.2h3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.2V12l2.6 1.6"
  }))),
  pause: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.2v5.6M14 9.2v5.6"
  }))),
  clock: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.5V12l3 1.8"
  }))),
  lock: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "10.5",
    width: "13",
    height: "9",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10.5V8a4 4 0 0 1 8 0v2.5"
  }))),
  heart: mkIcon(/*#__PURE__*/React.createElement("path", {
    d: "M12 19.5l-1.2-1.05C6.4 14.6 4 12.4 4 9.6 4 7.5 5.6 6 7.6 6c1.2 0 2.4.55 3.1 1.5l1.3 1.4 1.3-1.4C15 6.55 16.2 6 17.4 6 19.4 6 21 7.5 21 9.6c0 2.8-2.4 5-6.8 8.85L12 19.5z"
  })),
  edit: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 19.5h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 15.5l8.5-8.5 3 3-8.5 8.5H5.5v-3z"
  }))),
  box: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 8l8-4 8 4-8 4-8-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8v8l8 4 8-4V8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12v8"
  }))),
  trash: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 7h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V5.4A1.4 1.4 0 0 1 10.4 4h3.2A1.4 1.4 0 0 1 15 5.4V7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 7l.9 12.1A1.5 1.5 0 0 0 8.9 20.5h6.2a1.5 1.5 0 0 0 1.5-1.4L17.5 7"
  }))),
  undo: mkIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 9h9.5a4.5 4.5 0 0 1 0 9H7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 5.5L4 9l3.5 3.5"
  })))
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/backpack/Backpack.jsx
try { (() => {
/* The Backpack — chosen direction.
   C's editorial / sage layout + A's gentle copy, renamed from "The Backpack"
   to "The Backpack" (you carry your reason with you — Soulful Backpack DNA).
   Serif headline (Lora) + sans body (Mulish). */

function MarkBp() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      display: 'inline-block',
      transform: 'rotate(45deg)',
      borderRadius: 3,
      background: 'var(--sage-soft)',
      border: '1.5px solid var(--sage)'
    }
  });
}
function Backpack({
  seedText = '',
  seedSaved = false,
  ephemeral = false
}) {
  // Persistent draft (standalone) OR ephemeral seeded state (thread display).
  const persist = window.useBackpackDraft('BP');
  const [eText, setEText] = React.useState(seedText);
  const [eSaved, setESaved] = React.useState(seedSaved);
  const {
    text,
    setText,
    saved,
    commit,
    reopen
  } = ephemeral ? {
    text: eText,
    setText: setEText,
    saved: eSaved,
    commit: () => setESaved(true),
    reopen: () => setESaved(false)
  } : persist;
  const taRef = window.useAutoGrow(text, 230);
  const canSave = text.trim().length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "hm-screen",
    style: {
      background: 'var(--bg)',
      padding: '62px 24px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MarkBp, null), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "The Backpack")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "01")), !saved ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rise d2",
    style: {
      marginTop: 22,
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)',
      padding: '24px 22px 24px 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 18,
      bottom: 18,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--terracotta), rgba(189,106,60,0.15))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 15.5,
      lineHeight: 1.5,
      color: 'var(--sage)'
    }
  }, "A move is more than boxes."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.16,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, "Why are you moving, really?")), /*#__PURE__*/React.createElement("p", {
    className: "rise d3",
    style: {
      margin: '20px 2px 0',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "Write whatever comes to mind. There are no wrong answers, and you can change it whenever you like."), /*#__PURE__*/React.createElement("div", {
    className: "rise d4",
    style: {
      marginTop: 16,
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '14px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 8px',
      color: 'var(--muted)'
    }
  }, "In your own words"), /*#__PURE__*/React.createElement("textarea", {
    ref: taRef,
    className: "hm-field",
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "This move is about\u2026",
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 16,
      lineHeight: 1.62,
      flex: 1,
      minHeight: 92
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rise d5",
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    disabled: !canSave,
    onClick: commit,
    style: {
      width: '100%',
      height: 54,
      fontSize: 16
    }
  }, "Save & begin"))) : /*#__PURE__*/React.createElement(SavedBp, {
    text: text,
    onEdit: reopen
  }));
}
function SavedBp({
  text,
  onEdit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      marginTop: 22,
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)',
      padding: '22px 22px 22px 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 18,
      bottom: 18,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--sage), rgba(46,122,77,0.18))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--sage)',
      letterSpacing: '0.01em',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 5.2l2.3 2.3L8.5 2.5",
    stroke: "var(--sage)",
    strokeWidth: "1.7",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "In your backpack"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 23,
      lineHeight: 1.22,
      color: 'var(--ink)'
    }
  }, "This is your reason. You\u2019ll carry it with you.")), /*#__PURE__*/React.createElement("p", {
    className: "rise d2",
    style: {
      margin: '18px 2px 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "We\u2019ll bring it back when a step feels heavy. It opens the Retrospective at the end, so you can see how far you\u2019ve come."), /*#__PURE__*/React.createElement("div", {
    className: "rise d3",
    style: {
      marginTop: 14,
      flex: 1,
      overflow: 'auto',
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 8px'
    }
  }, "In your own words"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--sans)',
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--ink)',
      whiteSpace: 'pre-wrap'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    className: "rise d4",
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    style: {
      width: '100%',
      height: 54,
      fontSize: 16
    }
  }, "Enter Help Me Move"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    onClick: onEdit,
    style: {
      width: '100%',
      height: 40,
      marginTop: 6,
      fontSize: 14
    }
  }, "Edit this")));
}
window.Backpack = Backpack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/backpack/Backpack.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/backpack/Focus.jsx
try { (() => {
/* Focus tab — gentle resurfacing.
   PRD: Focus shows ONE task. When a task has been stuck 3+ days, the app
   brings the user's own backpack words back, gently and not repeatedly.
   Same Help Me Move system. No em dashes. */

function Diamond({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      transform: 'rotate(45deg)',
      borderRadius: 3,
      background: 'var(--sage-soft)',
      border: '1.5px solid var(--sage)'
    }
  });
}
function Focus() {
  const why = window.HMM_WHY;
  return /*#__PURE__*/React.createElement("div", {
    className: "hm-screen",
    style: {
      background: 'var(--bg)',
      padding: '62px 22px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Focus"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    style: {
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "All tasks", /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "10",
    viewBox: "0 0 6 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d2",
    style: {
      marginTop: 18,
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)',
      padding: '18px 18px 18px 22px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 16,
      bottom: 16,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--sage), rgba(46,122,77,0.16))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Diamond, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      color: 'var(--sage)'
    }
  }, "From your backpack")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "This one has been waiting three days. When you started, you wrote:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 16.5,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, "\u201C", why, "\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "rise d3",
    style: {
      marginTop: 16,
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      border: '1px solid var(--line-soft)',
      boxShadow: '0 8px 24px rgba(34,27,23,0.06)',
      padding: '18px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--sage-soft)',
      color: 'var(--sage)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.04em',
      padding: '5px 11px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--sage)'
    }
  }), "READY"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, "waiting 3 days")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--sans)',
      fontWeight: 800,
      fontSize: 21,
      lineHeight: 1.2,
      color: 'var(--ink)'
    }
  }, "Photograph 5 items for Marketplace"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "Start with the things you have already let go of in your head. These could recover around ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "$1,400"), ", about six days of runway."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 14px',
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--sage)'
    }
  }, "$1,400"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      lineHeight: 1.35
    }
  }, "estimated recovery, offsetting your monthly draw")), /*#__PURE__*/React.createElement("button", {
    className: "hm-btn",
    style: {
      marginTop: 16,
      width: '100%',
      height: 52,
      fontSize: 16
    }
  }, "Mark done"), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    style: {
      width: '100%',
      height: 38,
      marginTop: 4,
      fontSize: 13.5
    }
  }, "Show me something easier")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "rise d4",
    style: {
      margin: '16px 0 0',
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--muted)'
    }
  }, "1 of 6 ready \xB7 2 waiting on the apartment approval")));
}
window.Focus = Focus;
window.HMDiamond = Diamond;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/backpack/Focus.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/backpack/Retro.jsx
try { (() => {
/* Retrospective — the opening.
   Addendum: the move's final chapter opens with the user's backpack words,
   unedited. Financial and emotional data sit side by side. The gap between
   what they wrote then and how they feel now is the story. No em dashes. */

function Stat({
  value,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--bg-sand)',
      borderRadius: 'var(--r-field)',
      border: '1px solid var(--line-soft)',
      padding: '13px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 22,
      fontWeight: 600,
      color,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontSize: 11,
      color: 'var(--muted)',
      lineHeight: 1.25
    }
  }, label));
}
function LetGoRow({
  d,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 0',
      borderBottom: last ? 'none' : '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, d.item), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line-soft)',
      minWidth: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--muted)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, d.fate, d.amount ? ' · ' : '', d.amount ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      fontWeight: 700
    }
  }, d.amount) : null)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)'
    }
  }, "\u201C", d.note, "\u201D"));
}
function Retro() {
  const why = window.HMM_WHY;
  const now = window.HMM_NOW;
  const letgo = window.HMM_LETGO || [];
  const D = window.HMDiamond;
  return /*#__PURE__*/React.createElement("div", {
    className: "hm-screen",
    style: {
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '62px 22px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rise d1",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(D, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "hm-kicker",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "The Retrospective")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "Aug 2026")), /*#__PURE__*/React.createElement("p", {
    className: "rise d2",
    style: {
      margin: '26px 0 0',
      fontSize: 13,
      color: 'var(--muted)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "Here is why you said you were moving"), /*#__PURE__*/React.createElement("div", {
    className: "rise d2",
    style: {
      position: 'relative',
      paddingLeft: 18,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      bottom: 4,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--terracotta), rgba(189,106,60,0.15))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.38,
      color: 'var(--ink)'
    }
  }, why)), /*#__PURE__*/React.createElement("div", {
    className: "rise d3",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 12px'
    }
  }, "The move, in numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$1,840",
    label: "Recovered from Marketplace",
    color: "var(--sage)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$2,605",
    label: "What the move cost",
    color: "var(--coral)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "8 days",
    label: "Of runway recovered",
    color: "var(--ink)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rise d4",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 4px'
    }
  }, "What you let go of"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      border: '1px solid var(--line-soft)',
      boxShadow: '0 8px 24px rgba(34,27,23,0.05)',
      padding: '4px 18px',
      marginTop: 10
    }
  }, letgo.map((d, i) => /*#__PURE__*/React.createElement(LetGoRow, {
    key: i,
    d: d,
    last: i === letgo.length - 1
  }))), /*#__PURE__*/React.createElement("button", {
    className: "hm-ghost",
    style: {
      marginTop: 10,
      fontSize: 13.5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, "And 9 more decisions", /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "10",
    viewBox: "0 0 6 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rise d5",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hm-kicker",
    style: {
      margin: '0 0 14px',
      color: 'var(--terracotta)'
    }
  }, "And here is how you feel now"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      bottom: 4,
      width: 4,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--sage), rgba(46,122,77,0.18))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.38,
      color: 'var(--ink)'
    }
  }, now)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: '16px 18px',
      background: 'var(--sage-tint)',
      borderRadius: 'var(--r-card)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, "The distance between those two paragraphs is the whole move. You can keep this, print it, or just close it and carry it with you.")))));
}
window.Retro = Retro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/backpack/Retro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/backpack/shared.jsx
try { (() => {
/* Shared hooks + bits for The Backpack variations.
   Exported to window so each variation script can use them. */

const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* Auto-grow a textarea to fit its content (calm, no scrollbar). */
function useAutoGrow(value, maxHeight) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    const h = maxHeight ? Math.min(el.scrollHeight, maxHeight) : el.scrollHeight;
    el.style.height = h + 'px';
    el.style.overflowY = maxHeight && el.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }, [value, maxHeight]);
  return ref;
}

/* Persist the anchor draft + saved state per variation key. */
function useBackpackDraft(key) {
  const draftKey = 'hmm.backpack.' + key;
  const savedKey = 'hmm.backpack.' + key + '.saved';
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem(draftKey) || '';
    } catch {
      return '';
    }
  });
  const [saved, setSaved] = useState(() => {
    try {
      return localStorage.getItem(savedKey) === '1';
    } catch {
      return false;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(draftKey, text);
    } catch {}
  }, [text, draftKey]);
  const commit = useCallback(() => {
    try {
      localStorage.setItem(savedKey, '1');
    } catch {}
    setSaved(true);
  }, [savedKey]);
  const reopen = useCallback(() => {
    try {
      localStorage.setItem(savedKey, '0');
    } catch {}
    setSaved(false);
  }, [savedKey]);
  return {
    text,
    setText,
    saved,
    commit,
    reopen
  };
}

/* Count words for the gentlest possible progress cue (no limits). */
function wordCount(s) {
  const t = (s || '').trim();
  return t ? t.split(/\s+/).length : 0;
}
Object.assign(window, {
  useAutoGrow,
  useBackpackDraft,
  wordCount
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/backpack/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/backpack/thread-data.js
try { (() => {
/* Shared sample content for the Backpack thread (Focus + Retrospective).
   One persona's words, carried through every moment. No em dashes. */

window.HMM_WHY = "I want to carry less into the next chapter. This house holds fifteen years and a marriage that ended, and I keep tripping over its furniture. I'm not running from any of it. I just want to choose what comes with me this time.";
window.HMM_NOW = "Lighter than I expected. I thought I'd grieve the things. Mostly I just feel like myself again.";
window.HMM_LETGO = [{
  item: "Orange reading chair",
  fate: "Sold",
  amount: "$120",
  note: "Someone else gets to make memories in it now."
}, {
  item: "The dining table",
  fate: "Donated",
  amount: null,
  note: "Fifteen years of dinners. Ready to hold new ones."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/backpack/thread-data.js", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/frames/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/frames/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-me-move/frames/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-me-move/frames/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardRow = __ds_scope.CardRow;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
