import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest'
import { servidor } from '../mocks/servidor'
import { telaDeCelular } from './tela'

beforeAll(() => {
  servidor.listen({ onUnhandledRequest: 'error' })
})

beforeEach(() => {
  telaDeCelular()
})

afterEach(() => {
  cleanup()
  servidor.resetHandlers()
  localStorage.clear()
})

afterAll(() => {
  servidor.close()
})
