const baseConfig = require('./webpack.config.js')
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

module.exports = function(env, argv) {
    const base = baseConfig(env, argv)
    return merge(base, {
        entry: './lib/index.js',
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '../dist/',
            filename: 'vue-privilege-menu.js',
            library: 'vuePrivilegeMenu',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]
    })
}