const path = require('path')
module.exports = {
    publicPath: '/f',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
    }
}