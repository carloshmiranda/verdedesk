import { describe, it, expect } from 'vitest'

// Email validation regex extracted from waitlist.ts for unit testing
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

describe('waitlist email validation', () => {
  it('accepts valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('name+tag@domain.co.uk')).toBe(true)
    expect(isValidEmail('firstname.lastname@company.io')).toBe(true)
  })

  it('rejects invalid emails', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('notanemail')).toBe(false)
    expect(isValidEmail('@nodomain')).toBe(false)
    expect(isValidEmail('missing@')).toBe(false)
    expect(isValidEmail('spaces in@email.com')).toBe(false)
  })
})
