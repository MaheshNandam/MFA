const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
     resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [       
        new ModuleFederation({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}