import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Splash page', () => {
  it('renders the Eurograft logo', () => {
    render(<Page />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('logo has drop-shadow class applied', () => {
    render(<Page />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo.className).toMatch(/drop-shadow/)
  })
})
