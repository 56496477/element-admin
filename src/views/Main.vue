<template>
    <el-container class="n-container">
        <el-aside :width="collapse ? '200px' : '60px'">
            <div class="n-logo" :style="{width: collapse ? '200px' : '60px'}">
                <div class="logo" :style="{width: collapse ? '160px' : '45px'}"></div>
            </div>
            <sidebarMenu :menuList="menuList"></sidebarMenu>
        </el-aside>
        <el-container class="n-main" :style="{paddingLeft: collapse ? '200px' : '60px'}">
            <el-header>
                <div class="n-header">
                    <span @click="toggleClick" class="el-icon-won-n-menu"></span>
                    <div class="menu">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
            </el-header>
            <el-main>
                <div class="n-active-menu">
                    <el-tag size="medium" v-for="item in currentMenu" @close="tagClose(item)" @click.native="tagClick(item)" :class="[currentName == item.name ? 'el-tag-active' : '']" closable color="#fff">{{item.name}}</el-tag>
                </div>
                <div class="active-div">
                    <router-view></router-view>
                </div>
            </el-main>
            <!-- <el-footer height="30px"></el-footer> -->
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
            currentMenu() {
                return this.$store.state.currentMenu;
            },
            currentName() {
                return this.$store.state.currentName;
            }
        },
        methods: {
            toggleClick() {
                this.$store.commit('UPDATECOLLAPSE');
            },
            tagClose(val) {
                this.$store.commit('DELETECURRENTMENU', val.name);
            },
            tagClick(val) {
                this.$store.commit('TOOGLECURRENTMENU', val);
                this.$router.push({
                    path: val.path
                });
            }
        }
    };
</script>

<style lang="scss">

</style>