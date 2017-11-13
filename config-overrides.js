const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin('babel-macros', config);
  const existing_loaders = config.module.rules[1].oneOf
  let babel_loader = existing_loaders.find(({test}) => test instanceof RegExp && test.exec('ugh.js'))
  existing_loaders.unshift({
    test: /\.md$/,
    use: [
      { loader: babel_loader.loader, options: babel_loader.options },
      require.resolve('react-markdown-loader'),
    ],
  })
  return config
}
