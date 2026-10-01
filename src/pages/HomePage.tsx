export function HomePage() {
  return (
    <section className="w-full max-w-2xl" aria-labelledby="page-title">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#187c74]">Accretion AI</p>
      <h1 id="page-title" className="max-w-[12ch] text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.04em] text-[#17202a] max-[600px]:text-[clamp(3rem,17vw,5rem)]">
        Hello from Accretion.
      </h1>
      <p className="mt-8 max-w-lg text-[1.1rem] leading-[1.7] text-[#5b6870]">
        Your AI chat platform is ready for its first interface.
      </p>
    </section>
  )
}
