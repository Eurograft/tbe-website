import { render, screen } from '@testing-library/react'
import ProductsPage from './page'

jest.mock('@/components/ContactForm', () => ({
  __esModule: true,
  default: () => <button type="submit">Send Request</button>,
}))

describe('Products page', () => {
  it('renders the main heading', () => {
    render(<ProductsPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Our Allograft Portfolio'
    )
  })

  it('renders all 4 category headings', () => {
    render(<ProductsPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /sports medicine/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /bone allografts/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /spine allografts/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /wound care/i })
    ).toBeInTheDocument()
  })

  it('renders spot-check products from each category', () => {
    render(<ProductsPage />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Achilles Tendon Allograft' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Cortical Bone Allograft' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Cervical Spacers' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Acellular Dermal Matrix' })
    ).toBeInTheDocument()
  })

  it('renders the inquiry form (ContactForm)', () => {
    render(<ProductsPage />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })
})
