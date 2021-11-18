import imgSrc from './images/ahoy.jpg'


var App = {
    data() {
        return {
            imgSrc: imgSrc,
        }
    },
    template: `
        <div>
            我是一個入口組件asdasd
            <img :src="imgSrc" alt="my waifu"></img>
        </div>
    `
}


// 聲明 并導出
export var num1 = 10; // 作為一整個對象key導出

// 聲明再導出 (正常用法)
var num2 = 5;
export { num2 };

export function add(x, y) {
    return console.log(x + y);
}


export default App;