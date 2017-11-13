module.exports = function override(config, env) {
  const existing_loaders = config.module.rules[1].oneOf
  existing_loaders.unshift({
    test: /\.md$/,
    use: 'md-to-react',
  })
  return config
}
