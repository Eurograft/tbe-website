import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home page stub', () => {
  it('renders the home placeholder', () => {
    render(<Page />)
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
  })
})
