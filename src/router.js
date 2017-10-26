import Main from './views/Main.vue'

const mainRouter = [
    {
        path: '/',
        name: 'fniu',
        title: '组件',
        icon: 'el-icon-menu',
        component: Main,
        children: [
            { path: 'markdown', title: '富文本', icon: 'el-icon-edit-outline', name: 'markdown', component: resolve => { require(['./views/markdown.vue'], resolve); } },
            { path: 'images', title: '图片', icon: 'el-icon-picture-outline', name: 'images', component: resolve => { require(['./views/images.vue'], resolve); } },
            { path: 'index', title: '首页', icon: 'el-icon-edit-outline', name: 'index', component: resolve => { require(['./views/home.vue'], resolve); } },
        ]
    },
    {
        path: '/404',
        name: '404',
        title: '404',
        icon: 'el-icon-circle-close-outline',
        component: Main,
        children: [
            { path: '404', title: '404', icon: 'el-icon-circle-close-outline', name: '404', component: resolve => { require(['./views/404.vue'], resolve); } },
        ]
    },
    {
        path: '/table',
        name: 'table',
        title: '表格',
        icon: 'el-icon-tickets',
        component: Main,
        children: [
            { path: 'index', title: 'ele表格', name: 'table1', component: resolve => { require(['./views/table.vue'], resolve); } },
        ]
    },
]

export const routes = [
    ...mainRouter
];