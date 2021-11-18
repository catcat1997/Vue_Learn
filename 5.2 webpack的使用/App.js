var App = {
    template: `
        <div>我是一個入口組件</div>
    `
}


// 聲明 并導出
export var num1 = 2; // 作為一整個對象key導出

// 聲明再導出 (正常用法)
var num2 = 3;
export { num2 };

export function add(x, y) {
    return console.log(x + y);
}


export default App;