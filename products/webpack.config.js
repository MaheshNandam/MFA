const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),      
        new ModuleFederation({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './Products': './src/index'
            }
        })
    ]
}