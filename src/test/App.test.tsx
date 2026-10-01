import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../app/App'


describe('App', () => {
  it('renders the starter screen', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /clear place to start building/i })).toBeInTheDocument()
  })

  it('updates the status when the primary action is pressed', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    render(<App />)
    await user.click(screen.getByRole('button', { name: /mark as ready/i }))

    expect(screen.getByRole('status')).toHaveTextContent('Starter wiring is working.')
  })
})
