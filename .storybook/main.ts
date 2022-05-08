module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // This config is essential. Otherwise storybook will not load the stories. (error message: Uncaught ReferenceError: global is not defined at node_modules/jest-mock/build/index.js)
    // Update this magic thing when the fix is released.
    // Needed only for development mode: `npm run storybook`
    config.optimizeDeps =
      configType === 'PRODUCTION'
        ? config.optimizeDeps
        : {
            ...(config.optimizeDeps || {}),
            include: [
              ...(config?.optimizeDeps?.include || []),
              // Fix: `@storybook/addon-interactions` exports is not defined or `jest-mock` does not provide an export named 'fn'
              'jest-mock',
            ],
          }
    return config
  },
}
