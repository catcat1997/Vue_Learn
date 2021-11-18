// es Module的模塊導入
import Vue from './vue.js'

import App from './App.js'

import { num1, num2, add } from './App.js'

add(15, 15);

console.log(num1);
console.log(num2);

import './main.css'

new Vue({
    el: "#app",
    data() {
        return {}
    },
    template: `<App />`,
    components: { App },
});