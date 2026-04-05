import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('ContactForm', () => {
  it('renders all 7 form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Organisation')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: true } as Response)
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/thank you — we'll be in touch shortly/i)).toBeInTheDocument()
    })
  })

  it('shows error message when submission returns non-200', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false } as Response)
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('shows error message on network failure', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'))
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('disables the submit button while submitting', async () => {
    let resolve: (v: unknown) => void
    jest.spyOn(global, 'fetch').mockImplementationOnce(
      () => new Promise((res) => { resolve = res })
    )
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    const button = screen.getByRole('button', { name: /send request/i })
    fireEvent.click(button)
    await waitFor(() => {
      expect(button).toBeDisabled()
    })
    resolve!({ ok: true })
    await waitFor(() => {
      expect(screen.getByText(/thank you — we'll be in touch shortly/i)).toBeInTheDocument()
    })
  })
})
