<template>
    <div id="app">
        <router-view></router-view>
        <!-- <el-button type="primary" @click="init()">主要按钮</el-button>
        <el-button type="primary" @click="nprogress()">主要按钮</el-button> -->
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {};
        },
        created() {
        },
        methods: {
            nprogress() {
                this.$nprogress.start();
                this.$nprogress.set(0.6);
                setTimeout(() => {
                    this.$nprogress.done();
                }, 800);
            },
            init() {
                const loading = this.$loading({
                    lock: true,
                    text: "Loading",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)"
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            }
        }
    };
</script>

<style lang="scss">
    @import './styles/index.scss';
    
</style>
