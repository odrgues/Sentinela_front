import { afterEach, describe, expect, it, vi } from 'vitest'
import { hoje, quandoFoi } from './data'

afterEach(() => {
  vi.useRealTimers()
})

describe('hoje', () => {
  it('usa o dia do aparelho, mesmo à noite, quando em Londres já é amanhã', () => {
    vi.useFakeTimers({ now: new Date(2026, 9, 18, 23, 30) })

    expect(hoje()).toBe('2026-10-18')
  })
})

describe('quandoFoi', () => {
  const agora = new Date(2026, 9, 11, 15, 0)

  it('hoje', () => {
    expect(quandoFoi(new Date(2026, 9, 11, 7, 0).toISOString(), agora)).toBe('hoje às 7h')
  })

  it('ontem, com a data', () => {
    expect(quandoFoi(new Date(2026, 9, 10, 7, 0).toISOString(), agora)).toBe('ontem, 10/10 às 7h')
  })

  it('antes de ontem, só a data, com os minutos quando tem', () => {
    expect(quandoFoi(new Date(2026, 9, 8, 7, 30).toISOString(), agora)).toBe('08/10 às 7h30')
  })
})
