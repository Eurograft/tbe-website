import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('img', { name: /eurograft logo/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/advancing surgery through trusted allografts/i)).toBeInTheDocument()
  })

  it('renders all nav links including Privacy Policy', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Footer />)
    expect(screen.getByText(/\+359 877 06 3134/i)).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByText(/asenovgrad/i)).toBeInTheDocument()
  })

  it('does NOT render an email address', () => {
    render(<Footer />)
    expect(screen.queryByText(/@/)).not.toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/eurograft tissue bank ltd/i)).toBeInTheDocument()
  })
})
