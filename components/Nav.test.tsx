import { render, screen, fireEvent } from '@testing-library/react'
import Nav from './Nav'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Nav', () => {
  it('renders the logo image', () => {
    render(<Nav />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: /home/i })[0]).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /about/i })[0]).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /products/i })[0]).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /contact/i })[0]).toBeInTheDocument()
  })

  it('renders the Request Information CTA button', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: /request information/i })[0]).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Nav />)
    const hamburger = screen.getByRole('button', { name: /toggle menu/i })
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu).toHaveClass('hidden')
    fireEvent.click(hamburger)
    expect(mobileMenu).not.toHaveClass('hidden')
  })
})
