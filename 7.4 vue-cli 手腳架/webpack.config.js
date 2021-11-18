var path = require('path');
module.exports = {
    entry: {
        "main": "./main.js"
    }, //打包入口文件,
    output: {
        path: path.resolve('./dist'),
        filename: "./build.js"
    }, //打包出口文件,
    plugins: [], //配置插件
    module: {
        rules: [] //配置各种用于源文件编译加载的loader
    },
    devServer: {} //配置开发静态http服务
}