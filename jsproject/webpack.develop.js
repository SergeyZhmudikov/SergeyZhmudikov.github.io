const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    devtool: "cheap-inline-module-source-map",

    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: path.join(__dirname, "build")
    }
});