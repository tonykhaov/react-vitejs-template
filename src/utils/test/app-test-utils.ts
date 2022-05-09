import { render as rtlRender } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event/dist/types/setup'
import AppProviders from '@src/context/app-providers'

type CustomRenderResult = {
  user: UserEvent
} & RenderResult

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): CustomRenderResult {
  const renderResult = rtlRender(ui, { wrapper: AppProviders, ...options })
  return {
    ...renderResult,
    user: userEvent.setup(),
  }
}

export * from '@testing-library/react'
export { customRender as render }
