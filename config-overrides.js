const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin('babel-macros',config);
  config.module.rules[1].oneOf.unshift({
    test: /\.md$/,
    use: 'raw-loader'
  })
  return config
}
