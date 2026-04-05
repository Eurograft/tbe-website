import { render, screen } from '@testing-library/react'
import ContactPage from './page'

jest.mock('@/components/ContactForm', () => ({
  __esModule: true,
  default: () => <button type="submit">Send Request</button>,
}))

describe('Contact page', () => {
  it('renders the main heading', () => {
    render(<ContactPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the Get in Touch heading', () => {
    render(<ContactPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /get in touch/i })
    ).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<ContactPage />)
    expect(screen.getByText('+359 877 06 3134')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<ContactPage />)
    expect(screen.getByText(/asenovgrad/i)).toBeInTheDocument()
  })

  it('renders the ContactForm', () => {
    render(<ContactPage />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })
})
