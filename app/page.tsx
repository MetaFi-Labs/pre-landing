import { displayFont } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 text-black sm:px-10 lg:px-16">
      <div className="w-full max-w-4xl border-4 border-black bg-white p-12">
        <div className="border-b-4 border-black pb-8">
          <h1
            className={`${displayFont.className} text-[clamp(3.25rem,10vw,5.5rem)] font-black italic tracking-tight sm:text-[clamp(2.75rem,7vw,5.5rem)]`}
          >
            Generic Money
          </h1>
          <p className="mt-2 text-lg">
            Very soon in your trusted wallet.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Product</p>
            <p className="mt-2 text-lg font-semibold">gmUSD preview</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Status</p>
            <p className="mt-2 text-lg font-semibold">Liquid calibration</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Availability</p>
            <p className="mt-2 text-lg font-semibold">Arriving soon</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 border-t-4 border-black pt-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Features</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>Stable peg alignment</li>
              <li>Wallet-friendly onboarding</li>
              <li>Plain-language disclosures</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">Preparation</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>Monitor launch briefings</li>
              <li>Verify collateral sources</li>
              <li>Prepare wallet integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
