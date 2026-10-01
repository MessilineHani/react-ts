import { Outlet } from 'react-router-dom'

export function PageShell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#e1f1ee_0,_transparent_34rem),_#f7f8fa] text-[#17202a]">
      <header className="flex min-h-18 items-center border-b border-[#dfe5e8] px-[5vw]">
        <a className="inline-flex items-center gap-2.5 text-[0.95rem] font-bold text-inherit no-underline" href="/" aria-label="Accretion home">
          <span className="grid size-8 place-items-center rounded-[0.55rem] bg-[#187c74] text-white" aria-hidden="true">A</span>
          <span>Accretion</span>
        </a>
      </header>
      <main className="grid min-h-[calc(100vh-4.5rem)] place-items-center px-[7vw] py-14 sm:px-[5vw] sm:py-20"><Outlet /></main>
    </div>
  )
}
