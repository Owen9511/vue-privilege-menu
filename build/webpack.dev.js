const baseConfig = require('./webpack.config.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

module.exports = function(env, argv) {
    const base = baseConfig(env, argv)
    return merge(base, {
        entry: './example/main.js',
        devServer: {
            openPage: 'index.html',
            historyApiFallback: true,
            noInfo: true,
            overlay: true
        },
        plugins:[
            new htmlWebpackPlugin({
                template: './example/index.html',
                filename: 'index.html',
                title: 'vue-privilege-menu',
                inject: true,
                cache: true,
            })
        ],
        devtool: '#source-map',
    })
}