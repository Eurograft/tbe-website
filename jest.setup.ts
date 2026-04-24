import '@testing-library/jest-dom'

// Ensure global.fetch exists so jest.spyOn(global, 'fetch') works in jsdom
if (typeof global.fetch === 'undefined') {
  global.fetch = jest.fn()
}

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => null,
}))
