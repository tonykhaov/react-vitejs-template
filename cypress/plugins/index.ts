// https://on.cypress.io/plugins-guide
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const isDev = config.watchForFileChanges
  const port = process.env.PORT ?? (isDev ? '3000' : '1234')
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:${port}`,
    video: !process.env.CI,
    screenshotOnRunFailure: !process.env.CI,
  }
  Object.assign(config, configOverrides)

  on('task', {
    log(message) {
      // eslint-disable-next-line no-console
      console.log(message)
      return null
    },
  })

  return config
}
