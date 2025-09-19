export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f6fb] px-6 py-12 text-slate-900 sm:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-[-140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_rgba(180,200,255,0.35),_transparent_70%)] blur-3xl animate-drift" />
        <div className="absolute right-[-120px] top-[12%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(180,248,255,0.65),_rgba(255,255,255,0.15),_transparent_75%)] blur-3xl animate-float" />
        <div className="absolute bottom-[-200px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.9),_rgba(210,222,255,0.25),_transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,_rgba(255,255,255,0.5)_0%,_rgba(255,255,255,0.15)_38%,_rgba(223,233,255,0.3)_68%,_rgba(255,255,255,0.1)_100%)]" />
      </div>
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-16 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div className="max-w-xl space-y-10">
          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] uppercase leading-[0.85] tracking-[-0.015em] text-slate-900">
            <span className="block">Generic Money,</span>
            <span className="block text-[clamp(1.5rem,3vw,2.75rem)] font-normal tracking-[0.18em] text-slate-700">
              very soon in your trusted wallet.
            </span>
          </h1>
          <p className="text-xs uppercase tracking-[0.6em] text-slate-400">
            Understated. Unmistakable.
          </p>
        </div>
        <div className="relative w-full max-w-sm md:max-w-md">
          <div
            className="absolute -top-16 -right-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.75),_rgba(162,210,255,0.25),_transparent_70%)] blur-3xl animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(194,255,243,0.5),_rgba(255,255,255,0.08),_transparent_70%)] blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[42px] border border-white/40 bg-white/25 px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-[45px]">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <div className="absolute inset-0 -translate-y-[30%] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_rgba(168,200,255,0.28),_transparent_75%)] opacity-80" />
              <div className="absolute -inset-[45%] animate-[spin_28s_linear_infinite] rounded-full bg-[conic-gradient(from_140deg_at_50%_50%,rgba(255,255,255,0.6),rgba(186,220,255,0.2),rgba(255,255,255,0.6))] opacity-35" />
              <div className="absolute inset-y-[-30%] left-[-40%] w-1/2 rotate-[18deg] bg-gradient-to-r from-white/0 via-white/70 to-white/0 mix-blend-screen animate-shimmer" />
            </div>
            <div className="relative space-y-8 text-left text-slate-600">
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.55em] text-slate-500">
                <span>gmUSD</span>
                <span className="flex items-center gap-2 text-[0.65rem] text-emerald-500">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.75)]" />
                  </span>
                  liquid
                </span>
              </div>
              <div className="space-y-3 text-slate-600">
                <p className="font-display text-5xl tracking-[-0.02em] text-slate-900">$gmUSD</p>
                <p className="text-sm leading-relaxed">
                  A stablecoin with purposefully plain packaging, tuned for wallets that value trust over noise.
                </p>
              </div>
              <div className="overflow-hidden rounded-full border border-white/60 bg-white/60 p-[2px]">
                <div className="flex items-center justify-between rounded-full bg-white/90 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.5em] text-slate-500">
                  <span>peg</span>
                  <span>calibrating</span>
                  <span>calm</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm text-slate-600">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-400">supply</p>
                  <p className="font-medium text-slate-700">growing quietly</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-400">arrival</p>
                  <p className="font-medium text-slate-700">very soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
