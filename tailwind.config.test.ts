import config from './tailwind.config'

describe('Tailwind brand tokens', () => {
  const colors = config.theme?.extend?.colors as Record<string, string>
  const fonts = config.theme?.extend?.fontFamily as Record<string, string[]>

  it('has brand-cyan color', () => {
    expect(colors['brand-cyan']).toBe('#2EAEE0')
  })

  it('has dark-slate color', () => {
    expect(colors['dark-slate']).toBe('#293241')
  })

  it('has body-text color', () => {
    expect(colors['body-text']).toBe('#3A3A3A')
  })

  it('has light-tint color', () => {
    expect(colors['light-tint']).toBe('#E8F6FC')
  })

  it('has divider color', () => {
    expect(colors['divider']).toBe('#E0E0E0')
  })

  it('has sans font family', () => {
    expect(fonts['sans']).toContain('var(--font-dm-sans)')
  })

  it('has serif font family', () => {
    expect(fonts['serif']).toContain('var(--font-dm-serif)')
  })
})
