import { PageShell } from '../components/layout/PageShell'
import { HomePage } from '../pages/HomePage'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function App() {
  useDocumentTitle('React TypeScript Starter')

  return (
    <PageShell>
      <HomePage />
    </PageShell>
  )
}
