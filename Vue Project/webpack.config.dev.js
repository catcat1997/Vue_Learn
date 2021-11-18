var path = require('path');
const packagejson = require('./package.json');
const webpack = require('webpack');

module.exports = {

    entry: {

        "main": "./main.js",

    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    plugins: [

    ],

    watch: true,
}