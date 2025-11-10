import Image from "next/image";
import Link from "next/link";

const heroStats = [
  {
    value: "≤ 40 bps",
    label: "slippage recaptured on cross-rollup swaps",
  },
  {
    value: "$1.00",
    label: "Redemption Value ceiling, fully collateralized",
  },
  {
    value: "Native yield",
    label: "Morpho • Sky strategies refill the buffer",
  },
];

const dividerPhrases = [
  "LayerZero settlement",
  "Real-yield distribution",
  "Collateral buffer",
  "Steakhouse managed",
];

const problemPoints = [
  {
    title: "Capital dilution",
    description: "Bridged wrappers and thin pools slip as much as 40 bps when liquidity fragments across rollups.",
  },
  {
    title: "Yield isolation",
    description: "Rollup TVL sits idle on emissions instead of tapping the real yield secured on Ethereum mainnet.",
  },
];

const solutionPillars = [
  {
    title: "Fully collateralized",
    description:
      "Backed 1:1 by USDC, USDT, and USDS in segregated ERC-4626 vaults with enforced exposure caps.",
  },
  {
    title: "Mainnet-native",
    description:
      "Canonical accounting happens on Ethereum while rollups mirror balances through LayerZero messaging.",
  },
  {
    title: "Cross-chain in sync",
    description:
      "Mint and redeem flows stay synchronized across networks, keeping total supply aligned everywhere.",
  },
  {
    title: "Real yield",
    description:
      "Collateral deploys into vetted L1 strategies (Morpho and Sky) to generate sustainable native yield.",
  },
];

const liquidityFlow = [
  {
    title: "Mint & Mirror",
    description:
      "Users deposit USDC, USDT, or USDS on Ethereum. Vaults mint matched GUSD and LayerZero mirrors balances to every supported rollup.",
  },
  {
    title: "Yield & Redeem",
    description:
      "Collateral strategies refill the buffer, then stream fresh GUSD to ecosystems. Holders can always redeem against the basket's Redemption Value (≤ $1).",
  },
];

const mechanics = [
  {
    title: "Peg + Collateral Architecture",
    bullets: [
      "Every GUSD tracks the basket's Redemption Value and stays redeemable for ≤ $1.",
      "Dedicated buffer plus asset caps (~45-50%) keep exposure balanced across vaults.",
      "Steakhouse Financial executes moves within pre-approved strategy rails.",
    ],
  },
  {
    title: "Yield & Distribution Loop",
    bullets: [
      "Yield refills the buffer, then mints new GUSD that streams to rollups by supply share.",
      "A 10% protocol rake supports the treasury while all flows remain verifiable onchain.",
      "Mirror balances on rollups stay synchronized through LayerZero settlement messages.",
    ],
  },
];

const riskControls = [
  "Audited contracts with reviews by Spearbit and additional firms.",
  "Hard exposure caps per vault limit systemic collateral risk.",
  "Canonical supply originates on L1 with mirrored balances on rollups.",
  "Daily sync checks ensure bridged and canonical supplies match.",
  "A first-loss buffer absorbs volatility before it reaches users.",
];

const governanceNotes = [
  "Deterministic operations minimize discretionary control.",
  "Steakhouse Financial manages vault allocations with transparent mandates.",
  "Upgrades flow through a multisig with a 72h timelock and published audit diffs.",
  "Future releases graduate toward automation and full onchain visibility.",
];

const transparencyHighlights = [
  "Live dashboards for supply, collateral composition, and Redemption Value.",
  "Buffer size and oracle health reporting.",
  "Strategy performance and rollup-level yield distribution feeds.",
  "Every datapoint is verifiable onchain with no opaque accounting.",
];

const roadmap = [
  {
    phase: "v1.0: Launch (Audit Phase, Spearbit)",
    items: [
      "Canonical issuance on Ethereum with LayerZero-powered representations.",
      "Yield aggregation engine with protected collateral buffer.",
    ],
  },
  {
    phase: "v1.1: Transparency & Usability",
    items: [
      "Real-time dashboards for every risk primitive.",
      "Gas-aware routing to optimize mints and redemptions.",
    ],
  },
  {
    phase: "v1.2: Capital Efficiency",
    items: [
      "Time-weighted yield distribution to smooth emissions.",
      "Mint proxies on rollups for near-native UX.",
    ],
  },
  {
    phase: "v2.0: Automation",
    items: [
      "Onchain rebalancing and automated buffer overflow release.",
    ],
  },
  {
    phase: "v2.x: Advanced Features",
    items: [
      "Direct issuer lanes to accelerate re-pegs.",
      "L2-native minting pathways and intent-based router integrations (CoW, Anoma).",
    ],
  },
];

const impacts = [
  {
    title: "For Users",
    description:
      "A predictable stablecoin that works the same way on every network, delivering one balance everywhere.",
  },
  {
    title: "For Networks & DeFi",
    description:
      "Unified liquidity, materially lower incentives, and a canonical quote asset that restores composability across rollups and protocols.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F5F6FA] text-[#0A0B0D]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-generic-grid" />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:pt-36">
        <div className="hero-surface" />
        <div className="hero-ribbon" />
        <div className="hero-ribbon-alt" />
        <div className="hero-orb hero-orb-lg" />
        <div className="hero-orb hero-orb-sm" />

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative z-10 flex flex-col">
            <div className="hero-brand mb-8">
              <Image
                src="/full-logo-black.svg"
                alt="Generic logo"
                width={496}
                height={132}
                priority
                className="hero-brand__logo"
              />
              <span className="section-kicker badge-rise hero-brand__chip">Generic USD (GUSD)</span>
            </div>
            <h1 className="font-display text-[2.6rem] leading-tight text-[#0A0B0D] sm:text-[3.2rem] lg:text-[3.8rem]">
              <span className="block">One stablecoin.</span>
              <span className="block">Your chain&apos;s base yield.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#393B40]/90 sm:text-xl">
              Give builders on your network a canonical, fully collateralized dollar that recycles Ethereum-native yield back
              into your ecosystem and deepens liquidity from day one.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="mailto:partnerships@generic.money"
                className="group inline-flex items-center justify-center rounded-full bg-[#3F79FF] px-8 py-3 text-base font-medium text-white shadow-[0_22px_60px_rgba(63,121,255,0.28)] transition hover:bg-[#3566d9]"
              >
                <span>Talk to our team</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="https://generic.money/whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full border border-[#AAACB2] bg-white/80 px-8 py-3 text-base font-medium text-[#0A0B0D] backdrop-blur transition hover:border-[#3F79FF]/60 hover:text-[#3F79FF]"
              >
                <span>Read the whitepaper</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="trust-strip" aria-label="Audit updates and ecosystem partners">
              <div className="trust-strip__summary">
                <span className="trust-strip__label">Independent Oversight</span>
                <p className="trust-strip__quote">
                  “The architecture meaningfully simplifies cross-rollup liquidity.”
                  <span className="trust-strip__quote-source">— Spearbit preliminary review</span>
                </p>
              </div>
              <div className="trust-strip__items">
                <div className="trust-strip__item">
                  <div className="trust-strip__logo">
                    <Image src="/brand-mark.svg" alt="Spearbit audit in progress" width={40} height={40} />
                  </div>
                  <div className="trust-strip__meta">
                    <span className="trust-strip__meta-label">Security Audit</span>
                    <span className="trust-strip__meta-value">Spearbit (in progress)</span>
                  </div>
                </div>
                <div className="trust-strip__item trust-strip__item--placeholder">
                  <div className="trust-strip__meta">
                    <span className="trust-strip__meta-label">Ecosystem Partner</span>
                    <span className="trust-strip__meta-value">Announcement pending final approvals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-black/[0.04] bg-white/80 p-5 backdrop-blur">
                  <p className="font-display text-2xl text-[#3F79FF]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#6D6F76]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="hero-stage">
              <span className="hero-stage-glow" />
              <span className="hero-stage-grid" />
              <span className="hero-stage-beam" />

              <div className="hero-stage-window">
                <Image
                  src="/window.svg"
                  alt="Generic liquidity viewport"
                  fill
                  sizes="(min-width: 1024px) 480px, 82vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="hero-stage-token">
                <Image src="/brand-mark.svg" alt="Generic emblem" width={64} height={64} />
              </div>

              <div className="hero-stage-orbit">
                <Image src="/globe.svg" alt="Rollup footprint" width={80} height={80} />
              </div>

              <div className="hero-stage-orbit hero-stage-orbit-alt">
                <Image src="/file.svg" alt="Onchain audit file" width={72} height={72} />
              </div>

              <div className="glass-card hero-stage-card overflow-hidden rounded-[2.4rem] p-8">
                <div className="flex items-center justify-between text-sm text-[#6D6F76]">
                  <span>Audit phase</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3F79FF]/40 bg-white/70 px-3 py-1 text-xs font-medium text-[#3F79FF]">
                    Spearbit
                  </span>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-2xl bg-[#E0EAFF]/70">
                    <div className="absolute inset-2 flex items-center justify-center rounded-xl bg-white">
                      <Image src="/brand-mark.svg" alt="Generic mark" width={40} height={40} />
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#6D6F76]">Unified liquidity</p>
                    <p className="mt-1 font-display text-xl text-[#0A0B0D]">One dollar, everywhere.</p>
                  </div>
                </div>
                <div className="mt-8 space-y-3 text-sm text-[#393B40]">
                  <p>Canonical supply lives on Ethereum with daily sync checks mirrored to every rollup.</p>
                  <p>Collateral yield mints new GUSD that streams to partner ecosystems and treasury.</p>
                </div>

                <div className="mt-8 grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-[#3F79FF]">
                    <span>LayerZero settlement</span>
                    <span>↺ Synced supply</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#3F79FF]/30 bg-[#3F79FF]/10 px-4 py-3 text-xs uppercase tracking-[0.24em] text-[#0A0B0D]">
                    <span>Real-yield vaults</span>
                    <span>α = 10% treasury</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-chip hero-stage-chip inline-flex items-center gap-2 rounded-full border border-[#3F79FF]/40 bg-white/80 px-3 py-1.5 text-sm text-[#0A0B0D] backdrop-blur">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3F79FF]/15 text-xs font-semibold text-[#3F79FF]">
                ¤
              </span>
              Daily sync check
            </div>
          </div>
        </div>
      </section>

      <div className="hero-divider">
        <div className="hero-divider-track">
          {dividerPhrases.concat(dividerPhrases).map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="hero-divider-item">
              <span className="hero-divider-icon">¤</span>
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="hero-orb hero-orb-sm pointer-events-none -left-28 top-[32%] hidden lg:block" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="section-kicker">1. The Problem</span>
            <h2 className="section-heading">Fragmented liquidity is bleeding DeFi dry</h2>
            <p className="mt-5 text-base text-[#393B40] sm:text-lg">
              Stablecoins live in endless wrappers like USDC, bridged USDC.e, USDT, and DAI, each with its own liquidity. The
              spread bleeds incentives, weakens depth, and muddies UX across the stack.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <div
                key={point.title}
                className="group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-[0_40px_100px_rgba(15,23,42,0.05)] transition hover:border-[#3F79FF]/40 hover:shadow-[0_50px_120px_rgba(63,121,255,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] w-full translate-y-[-3px] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-[#3F79FF] to-transparent" />
                </div>
                <h3 className="font-display text-xl text-[#0A0B0D]">{point.title}</h3>
                <p className="mt-3 text-sm text-[#393B40]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-black/5 bg-diagonal-fade px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">2. The Solution</span>
          <h2 className="section-heading">A single USD-denominated asset across chains</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            GUSD unifies liquidity under one canonical, fully-backed stablecoin. By collapsing every fragmented wrapper into a
            universal quote asset, the ecosystem gains capital efficiency while replacing subsidy-driven incentives with
            genuine yield.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="relative overflow-hidden rounded-3xl border border-black/[0.05] bg-white/90 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.05)] backdrop-blur transition hover:-translate-y-1 hover:border-[#3F79FF]/40 hover:shadow-[0_40px_120px_rgba(63,121,255,0.18)]"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0EAFF] text-lg font-semibold text-[#3F79FF]">
                  ¤
                </span>
                <h3 className="font-display text-xl text-[#0A0B0D]">{pillar.title}</h3>
                <p className="mt-3 text-sm text-[#393B40]">{pillar.description}</p>
                <div className="absolute -right-12 top-6 h-24 w-24 rounded-full bg-[#3F79FF]/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="section-kicker">3. How it works</span>
              <h2 className="section-heading">Liquidity flows that stay perfectly in sync</h2>
              <p className="mt-4 text-lg text-[#393B40]">
                Canonical accounting on Ethereum keeps every rollup aligned. Mint, earn, and redeem cycles move in lockstep so
                that the circulating supply mirrors real collateral at every moment.
              </p>
              <div className="mt-10 space-y-6">
                {liquidityFlow.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-[#3F79FF]/10 font-display text-base text-[#3F79FF]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-display text-lg text-[#0A0B0D]">{step.title}</p>
                      <p className="mt-2 text-sm text-[#393B40]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {mechanics.map((block) => (
                <div
                  key={block.title}
                  className="col-span-1 rounded-[2rem] border border-[#D4D6DC]/70 bg-white px-6 py-5 shadow-[0_28px_80px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="font-display text-xl text-[#0A0B0D]">{block.title}</h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-[#393B40]">
                    {block.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-2 w-2 flex-none rounded-full bg-[#3F79FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-black/5 bg-white/80 px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="section-kicker">4. Safety &amp; Governance</span>
            <h2 className="section-heading">Risk controls with transparent stewardship</h2>
            <ul className="mt-6 space-y-4 text-sm text-[#393B40]">
              {riskControls.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#3F79FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.4rem] border border-black/[0.05] bg-white/90 p-10 shadow-[0_40px_110px_rgba(15,23,42,0.06)]">
            <h3 className="font-display text-2xl text-[#0A0B0D]">Governance Framework</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#393B40]">
              {governanceNotes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#3F79FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="whitepaper" className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">5. Transparency</span>
          <h2 className="section-heading">Everything, visible in real time</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            Upcoming v1.1 publishes live dashboards that surface every essential datapoint powering the peg.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {transparencyHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#D4D6DC] bg-white/85 p-6 text-sm text-[#393B40] shadow-[0_28px_80px_rgba(15,23,42,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-black/5 bg-white/80 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">6. Roadmap</span>
          <h2 className="section-heading">Shipping toward a canonical standard</h2>
          <div className="mt-12 space-y-12 border-l border-[#C8C9CC]">
            {roadmap.map((stage, index) => (
              <div key={stage.phase} className="relative pl-12">
                <span className="absolute left-0 top-0 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#3F79FF]/40 bg-white text-sm font-semibold text-[#3F79FF]">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl text-[#0A0B0D]">{stage.phase}</h3>
                <ul className="mt-4 space-y-3 text-sm text-[#393B40]">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#3F79FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <span className="section-kicker">7. Why it matters</span>
            <h2 className="section-heading">One dollar, everywhere</h2>
            <p className="mt-4 text-lg text-[#393B40]">
              GUSD unlocks a universal quote asset so DeFi can coordinate on a single, yield-bearing dollar that keeps users,
              rollups, and protocols aligned.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {impacts.map((impact) => (
              <div key={impact.title} className="rounded-3xl border border-black/[0.05] bg-white/85 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.05)]">
                <h3 className="font-display text-lg text-[#0A0B0D]">{impact.title}</h3>
                <p className="mt-3 text-sm text-[#393B40]">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="relative isolate px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.8rem] border border-[#3F79FF]/30 bg-white/90 px-8 py-16 text-center shadow-[0_38px_110px_rgba(63,121,255,0.2)]">
          <span className="section-kicker text-[#3F79FF]">8. Join early</span>
          <h2 className="mt-4 font-display text-3xl text-[#0A0B0D] sm:text-4xl">
            Currently in audit with Spearbit. Ecosystem partners are onboarding now.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-[#393B40]">
            Get on the list for early integrations, coordinated launches, and access to the real-yield infrastructure powering
            the Generic USD standard.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:hello@generic.money"
              className="group inline-flex items-center justify-center rounded-full bg-[#3F79FF] px-8 py-3 text-base font-medium text-white shadow-[0_22px_60px_rgba(63,121,255,0.28)] transition hover:bg-[#3566d9]"
            >
              <span>Get early access</span>
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="mailto:partnerships@generic.money"
              className="group inline-flex items-center justify-center rounded-full border border-[#3F79FF]/40 bg-white px-8 py-3 text-base font-medium text-[#3F79FF] backdrop-blur transition hover:border-[#3F79FF]"
            >
              <span>Contact the team</span>
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative isolate px-6 pb-16 pt-12 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#393B40] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-[#0A0B0D]">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0EAFF]">
              <Image src="/brand-mark.svg" alt="Generic mark" width={36} height={36} />
            </span>
            <div>
              <p className="font-display text-base">Generic</p>
              <p className="text-xs text-[#6D6F76]">Unified liquidity for Ethereum.</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <a href="https://generic.money" className="hover:text-[#3F79FF]">
              generic.money
            </a>
            <a href="https://instagram.com/Generic.money" className="hover:text-[#3F79FF]">
              @Generic.money
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

