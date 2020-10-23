module.exports = function(env, argv){
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                    'vue-style-loader',
                    'css-loader'
                    ],
                }, 
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(woff|woff2|ttf|eot|png|jpg|gif|svg)$/,
                    loader: 'url-loader',
                    options: {
                        name: "[name]-[hash:5].[ext]",
                    }
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        performance: {
            hints: false
        },
    }
}
