// es Module的模塊導入
import Vue from 'vue'

import App from './app.vue'

new Vue({
    el: "#app",
    components: {
        App
    },
    template: `<App />`
});