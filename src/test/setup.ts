import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { servidor } from '../mocks/servidor'

beforeAll(() => {
  servidor.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  cleanup()
  servidor.resetHandlers()
  localStorage.clear()
})

afterAll(() => {
  servidor.close()
})
