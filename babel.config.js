module.exports = function(api) {
  api.cache(true)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]

  return {
    presets,
    plugins
  }
}
