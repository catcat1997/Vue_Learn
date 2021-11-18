// es Module的模塊導入
import Vue from './vue.js'

import App from './App.js'

import { num1, num2, add } from './App.js'

add(15, 15);

console.log(num1);
console.log(num2);

import './main.css'

// 寫一下es6的代碼, 測驗webpack後用不用得到es6
let c = 4;
console.log(c);
const b = 56;
console.log(b);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});


promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]


new Vue({
    el: "#app",
    data() {
        return {}
    },
    template: `<App />`,
    components: { App },
});