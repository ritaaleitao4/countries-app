const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    config.plugins.delete('prefetch')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

      // Alias
      config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@components', path.resolve(__dirname, 'src/components'))
    },
}
