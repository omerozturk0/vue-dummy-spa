module.exports = {
  assetsDir: 'assets',
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule.use('sass-loader')
    .loader('sass-loader')
}
