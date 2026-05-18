"""
Monthly cash flow calculator: rent out San Lorenzo home, downsize to rent in Redwood City.

Three scenarios:
  Conservative — low rent collected, high new rent, property manager hired
  Balanced     — mid rent, mid new rent, self-managing
  Best Case    — top rent, low new rent, self-managing
"""

# ── Fixed: San Lorenzo carrying costs (same across all scenarios) ─────────────

MORTGAGE       = 1_500   # monthly P&I
PROPERTY_TAX   = 500     # annual $6,000 → $500/mo
INSURANCE      = 143     # annual $1,715 → $143/mo
HOA            = 0

CARRYING_COSTS = MORTGAGE + PROPERTY_TAX + INSURANCE + HOA   # $2,143/mo

# ── Fixed: landlord operating costs ──────────────────────────────────────────

HOME_VALUE      = 600_000
MAINTENANCE_MO  = (HOME_VALUE * 0.01) / 12   # 1% of value/yr → $500/mo
VACANCY_MONTHS  = 1                           # 1 month vacant per year
PROP_MGMT_RATE  = 0.09                        # 9% of rent (only in conservative)


# ── Scenario definitions ──────────────────────────────────────────────────────

SCENARIOS = [
    {
        "label":        "Conservative",
        "sl_rent":      3_200,   # low end of $3,200–$3,400 range
        "new_rent":     2_800,   # high end of $2,200–$2,800 range
        "prop_mgmt":    True,    # hire a property manager
    },
    {
        "label":        "Balanced",
        "sl_rent":      3_300,   # midpoint
        "new_rent":     2_500,   # midpoint
        "prop_mgmt":    False,   # self-manage
    },
    {
        "label":        "Best Case",
        "sl_rent":      3_400,   # high end of range
        "new_rent":     2_200,   # low end of range
        "prop_mgmt":    False,   # self-manage
    },
]


# ── Core calculation ──────────────────────────────────────────────────────────

def calculate(scenario: dict) -> dict:
    rent     = scenario["sl_rent"]
    new_rent = scenario["new_rent"]

    vacancy  = (rent * VACANCY_MONTHS) / 12
    mgmt     = rent * PROP_MGMT_RATE if scenario["prop_mgmt"] else 0.0

    operating = MAINTENANCE_MO + vacancy + mgmt
    total_out = CARRYING_COSTS + operating + new_rent
    net       = rent - total_out

    return {
        "label":          scenario["label"],
        "sl_rent":        rent,
        "new_rent":       new_rent,
        "carrying_costs": CARRYING_COSTS,
        "maintenance":    MAINTENANCE_MO,
        "vacancy":        vacancy,
        "mgmt":           mgmt,
        "operating":      operating,
        "total_out":      total_out,
        "net":            net,
        "uses_mgmt":      scenario["prop_mgmt"],
    }


# ── Output ────────────────────────────────────────────────────────────────────

def print_scenario(r: dict) -> None:
    sign = "+" if r["net"] >= 0 else "-"
    net_str = f"{sign}${abs(r['net']):,.0f}"

    print(f"\n{'─' * 48}")
    print(f"  {r['label'].upper()}")
    print(f"{'─' * 48}")
    print(f"  San Lorenzo rental income    ${r['sl_rent']:>7,.0f}")
    print()
    print(f"  SAN LORENZO CARRYING COSTS")
    print(f"    Mortgage (P&I)             ${MORTGAGE:>7,.0f}")
    print(f"    Property tax               ${PROPERTY_TAX:>7,.0f}")
    print(f"    Insurance                  ${INSURANCE:>7,.0f}")
    print(f"    HOA                        ${HOA:>7,.0f}")
    print(f"    Subtotal                   ${r['carrying_costs']:>7,.0f}")
    print()
    print(f"  LANDLORD OPERATING COSTS")
    print(f"    Maintenance reserve        ${r['maintenance']:>7,.0f}")
    print(f"    Vacancy (1 mo/yr)          ${r['vacancy']:>7,.0f}")
    mgmt_label = f"    Prop. mgmt (9%)   " if r["uses_mgmt"] else f"    Prop. mgmt (self) "
    print(f"{mgmt_label}         ${r['mgmt']:>7,.0f}")
    print(f"    Subtotal                   ${r['operating']:>7,.0f}")
    print()
    print(f"  YOUR REDWOOD CITY RENT       ${r['new_rent']:>7,.0f}")
    print(f"{'─' * 48}")
    print(f"  TOTAL OUT                    ${r['total_out']:>7,.0f}")
    print(f"  NET MONTHLY CASH FLOW        {net_str:>8}")
    print(f"{'─' * 48}")


def print_summary(results: list) -> None:
    print("\n" + "=" * 48)
    print("  SCENARIO COMPARISON SUMMARY")
    print("=" * 48)
    print(f"  {'Scenario':<14} {'SL Rent':>8} {'RC Rent':>8} {'Mgmt':>6} {'Net/Mo':>9}")
    print(f"  {'─'*14} {'─'*8} {'─'*8} {'─'*6} {'─'*9}")
    for r in results:
        mgmt_flag = "yes" if r["uses_mgmt"] else "no"
        net = r["net"]
        net_str = (f"+${net:,.0f}" if net >= 0 else f"-${abs(net):,.0f}")
        print(f"  {r['label']:<14} ${r['sl_rent']:>7,.0f} ${r['new_rent']:>7,.0f} {mgmt_flag:>6} {net_str:>9}")
    print("=" * 48)

    best = max(results, key=lambda x: x["net"])
    worst = min(results, key=lambda x: x["net"])
    print(f"\n  Best case shortfall:  ${abs(best['net']):,.0f}/mo out of pocket")
    print(f"  Worst case shortfall: ${abs(worst['net']):,.0f}/mo out of pocket")
    print()
    print("  Note: shortfall reflects lifestyle upgrade cost.")
    print("  San Lorenzo equity growth is not captured here.")


if __name__ == "__main__":
    results = [calculate(s) for s in SCENARIOS]

    print("\n" + "=" * 48)
    print("  MONTHLY CASH FLOW ANALYSIS")
    print("  San Lorenzo 3BR/2BA → Redwood City 1BR/1BA")
    print("=" * 48)

    for r in results:
        print_scenario(r)

    print_summary(results)
