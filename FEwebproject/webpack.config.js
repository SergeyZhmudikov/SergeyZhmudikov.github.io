var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var NODE_ENV = process.env.NODE_ENV;
var webpack = require('webpack');
module.exports = {
    entry: './js/app.js',
    output: {
        filename: './ready js/ready.js'
    },
    // watch: true,
    devtool: "cheap-inline-module-source-map",
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: path.join(__dirname, "./ready js"),
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            title: 'FrontEnd',
            filename: './ready js/index.html',
            template: 'index.html',

        })
    ]
};
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: true
        })
    )
};