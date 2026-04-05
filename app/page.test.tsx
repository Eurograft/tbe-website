import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Page from './page'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Hero section', () => {
  it('renders the main headline', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Premium Bone & Tissue Allografts'
    )
  })

  it('renders View Our Products CTA linking to /products', () => {
    render(<Page />)
    const link = screen.getByRole('link', { name: /view our products/i })
    expect(link).toHaveAttribute('href', '/products')
  })

  it('renders Request Information CTA in hero linking to /contact', () => {
    render(<Page />)
    // Nav is not rendered here (it is in layout.tsx), so only the hero CTA is present
    const link = screen.getByRole('link', { name: /request information/i })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
