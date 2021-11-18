var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    // 入口
    entry: {
        // 鍵名自己定義,我們這次用main
        // 可以有多個入口, 如果只有一個, 就默認從這個入口開始解析
        "main": "./main.js"
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'build.js'
    },
    // 聲明模塊, 包含各個loader
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 55000
                    }
                }]
            },

        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    watch: true, // 文件監視改動, 自動產出build.js
}