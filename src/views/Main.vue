<template>
    <el-container class="n-container">
        <el-aside :width="collapse ? '200px' : '64px'">
            <div class="n-logo" :style="{width: collapse ? '200px' : '64px'}">
                <div class="logo" :style="{width: collapse ? '160px' : '45px'}"></div>
            </div>
            <sidebarMenu :menuList="menuList"></sidebarMenu>
        </el-aside>
        <el-container class="n-main" :style="{paddingLeft: collapse ? '200px' : '64px'}">
            <el-header>
                <div class="n-header">
                    <span @click="toggleClick" class="el-icon-won-n-menu"></span>
                    <div class="menu">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item v-for="item in currentLink">活动管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
            </el-header>
            <el-main>
                <!-- <div class="n-active-menu">
                    
                </div>
                <div class="active-div">
                    <router-view></router-view>
                </div> -->
            </el-main>
            <el-footer height="30px"></el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import sidebarMenu from './components/sidebarMenu.vue'
    export default {
        components: {
            sidebarMenu
        },
        data() {
            return {};
        },
        computed: {
            menuList() {
                return this.$store.state.menuList;
            },
            collapse() {
                return this.$store.state.collapse;
            },
            currentLink() {
                return this.$store.state.currentLink;
            }
        },
        methods: {
            toggleClick() {
                this.$store.commit('UPDATECOLLAPSE');
            }
        }
    };
</script>

<style lang="scss">

</style>