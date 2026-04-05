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

describe('Why Eurograft section', () => {
  it('renders the section heading', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 2, name: /why surgical teams choose eurograft/i })
    ).toBeInTheDocument()
  })

  it('renders all 4 card titles', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 3, name: 'FDA-Sourced' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'EU Licensed' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pan-European Reach' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Responsive Service' })).toBeInTheDocument()
  })
})

describe('Products Teaser section', () => {
  it('renders the section heading', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 2, name: /our allograft portfolio/i })
    ).toBeInTheDocument()
  })

  it('renders all 4 product category headings', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 3, name: 'Cortical Bone Grafts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Cancellous Grafts' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Demineralised Bone Matrix (DBM)' })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Soft Tissue Allografts' })).toBeInTheDocument()
  })

  it('product cards link to /products', () => {
    render(<Page />)
    const links = screen.getAllByRole('link', { name: /cortical bone grafts/i })
    expect(links[0]).toHaveAttribute('href', '/products')
  })
})

describe('Quality & Compliance section', () => {
  it('renders the section heading', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 2, name: /uncompromising quality standards/i })
    ).toBeInTheDocument()
  })

  it('renders all 3 column headings', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Processing & Sterilisation' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'EU Regulatory Framework' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Cold Chain & Distribution' })
    ).toBeInTheDocument()
  })
})
