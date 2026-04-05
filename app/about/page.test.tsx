import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('About page', () => {
  it('renders the main heading', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'About Eurograft Tissue Bank'
    )
  })

  it('renders the Who We Are section heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /who we are/i })
    ).toBeInTheDocument()
  })

  it('renders the mission quote', () => {
    render(<AboutPage />)
    expect(screen.getByText(/focus on what matters most/i)).toBeInTheDocument()
  })

  it('renders the Regulatory Standing section heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /regulatory standing/i })
    ).toBeInTheDocument()
  })

  it('renders all 3 compliance column headings', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 3, name: /eu directive 2015\/566/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /bulgarian eamo licensed/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /full traceability/i })
    ).toBeInTheDocument()
  })
})
