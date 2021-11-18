<template>
    <!-- 當前組件結構 -->
    <div>
        {{msg}}
    </div>
</template>
<script>
    //  當前組件的邏輯
    export default {
        data() {
            return {
                msg: 'hello App.vue'
            }
        }
    }
</script>
<style>
    /* 當前組件的樣式 */
    
    body {
        background-color: aqua;
    }
</style>