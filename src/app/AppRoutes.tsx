import { createBrowserRouter } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    Component: PageShell,
    children: [
      { path: '/', Component: HomePage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
