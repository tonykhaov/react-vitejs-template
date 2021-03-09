import { render as rtlRender } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import AppProviders from '../../context/app-providers'

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult {
  return rtlRender(ui, { wrapper: AppProviders, ...options })
}

export * from '@testing-library/react'
export { render }
