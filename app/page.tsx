import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9FBFF] px-6 py-24 text-[#0F172A] sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-halo" />
        <div className="hero-halo outer" />
      </div>

      <div className="hero-stack relative flex flex-col items-center gap-10 text-center sm:gap-14">
        <span className="logo-glow">
          <Image
            src="/full-logo-black.svg"
            alt="Generic full logo"
            width={560}
            height={160}
            priority
          />
        </span>

        <p className="max-w-xl text-xl text-black sm:text-2xl">
          GUSD is nearly here. Stay tuned.
        </p>
      </div>
    </main>
  );
}
