module.exports = {
    // 入口
    entry: {
        // 鍵名自己定義,我們這次用main
        // 可以有多個入口, 如果只有一個, 就默認從這個入口開始解析
        "main": "./main.js"
    },
    output: {
        filename: './build.js'
    },
    // watch: true, // 文件監視改動, 自動產出build.js
}