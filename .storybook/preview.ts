import * as jest from '@storybook/jest'

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
// @ts-ignore TS2339: Property 'fn' does not exist on type 'typeof jest'.
window.jest = jest

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
