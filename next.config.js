const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')


// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}


module.exports = withCss(withSass({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      })
    }

    return config
  },
}))

