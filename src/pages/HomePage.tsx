import { useState } from 'react'
import { Button } from '../components/ui/Button'

export function HomePage() {
  const [isReady, setIsReady] = useState(false)

  return (
    <section className="w-full max-w-2xl" aria-labelledby="page-title">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#187c74]">Vite + React + TypeScript</p>
      <h1 id="page-title" className="max-w-[11ch] text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.04em] text-[#17202a] max-[600px]:text-[clamp(3rem,17vw,5rem)]">A clear place to start building.</h1>
      <p className="mt-8 max-w-lg text-[1.1rem] leading-[1.7] text-[#5b6870]">
        The demo surface is intentionally small. Replace this page with your first product screen and keep the surrounding structure.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => setIsReady(true)}>{isReady ? 'Ready to build' : 'Mark as ready'}</Button>
        <Button variant="secondary" onClick={() => setIsReady(false)}>Reset</Button>
      </div>
      <p className="mt-6 min-h-6 text-[#5b6870]" role="status" aria-live="polite">
        {isReady ? 'Starter wiring is working.' : 'Starter wiring is waiting for an interaction.'}
      </p>
    </section>
  )
}
