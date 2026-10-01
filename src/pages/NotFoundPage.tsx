import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="w-full max-w-2xl" aria-labelledby="not-found-title">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#187c74]">Accretion AI</p>
      <h1 id="not-found-title" className="text-5xl leading-none tracking-[-0.04em] text-[#17202a]">
        Page not found.
      </h1>
      <p className="mt-6 max-w-lg text-[1.1rem] leading-[1.7] text-[#5b6870]">
        The route you requested does not exist.
      </p>
      <Link className="mt-8 inline-flex font-bold text-[#187c74] underline underline-offset-4" to="/">
        Return home
      </Link>
    </section>
  )
}
