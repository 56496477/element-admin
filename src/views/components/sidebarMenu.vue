<template>
    <el-menu :style="{width: collapse ? '200px' : '60px'}" class="el-menu-vertical-demo" @select="handleSelect" :collapse="!collapse" background-color="#464c5b" text-color="#9ea7b4" active-text-color="#fff">
        <template v-for="item in menuList">
            <el-menu-item :index="item.path" v-if="item.children.length <= 1">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu :index="item.path" v-if="item.children.length > 1">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="option in item.children" :index="option.path">{{option.title}}</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            menuList: Array
        },
        computed: {
            collapse(){
                return this.$store.state.collapse;
            }
        },
        methods: {
            handleSelect(active) {
                this.$router.push({
                    path: active
                });
            }
        },
        watch: {
            '$route' (to) {
                localStorage.currentName = to.name;
                this.$store.commit('SETCURRENTMENU',to);
            }
        },
    }
</script>

<style scoped>

</style>
