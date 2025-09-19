export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05070c] px-6 py-16 text-zinc-100">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.15),_transparent_65%)]"
          aria-hidden="true"
        />
        <div className="scene-grid mask-radial-fade" aria-hidden="true" />
        <div className="liquid-blob liquid-blob--mint" aria-hidden="true" />
        <div className="liquid-blob liquid-blob--blue" aria-hidden="true" />
        <div className="liquid-blob liquid-blob--violet" aria-hidden="true" />
        <div className="scene-grain" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-16">
        <h1 className="font-display text-center text-[clamp(3.75rem,9vw,7.5rem)] uppercase leading-[0.86] tracking-[0.14em] text-white [text-wrap:balance]">
          <span className="block">Generic Money,</span>
          <span className="mt-6 block font-normal text-[clamp(1.6rem,4.2vw,3.2rem)] tracking-[0.42em] text-white/70">
            very soon in your trusted wallet.
          </span>
        </h1>

        <div className="group relative w-full max-w-xl">
          <div className="glass-card">
            <div className="glass-card__halo" aria-hidden="true" />
            <div className="glass-card__sheen" aria-hidden="true" />
            <div className="glass-noise" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
                <span>peg</span>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300/90 shadow-[0_0_15px_rgba(94,234,212,0.9)] animate-pulse-soft"
                    aria-hidden="true"
                  />
                  <span>1.0000</span>
                </div>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="space-y-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.5em] text-white/55">
                    ticker
                  </span>
                  <span className="font-display text-5xl tracking-[0.32em] text-white">
                    $gmUSD
                  </span>
                </div>

                <div className="glass-chip">
                  <span className="text-[0.55rem] uppercase tracking-[0.5em] text-white/60">
                    drift
                  </span>
                  <span className="mt-2 text-lg tracking-[0.3em] text-white/85">
                    0.2%
                  </span>
                </div>
              </div>

              <div
                className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.45em] text-white/55">
                <span>liquidity loop</span>
                <span className="animate-pulse-soft text-white/85">syncing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
