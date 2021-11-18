var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const packagejson = require('./package.json');
const webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        // 鍵名自己定義,我們這次用main
        // 可以有多個入口, 如果只有一個, 就默認從這個入口開始解析
        "main1": "./main1.js",
        "main2": "./main2.js",
        "vendor": "./common.js"
            // vendor 是獲取生產環境依賴的庫 在這例子是common.js
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin(),

    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',

                },
            },
        },
    },

    watch: true, // 文件監視改動, 自動產出build.js
}