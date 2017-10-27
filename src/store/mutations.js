import * as types from './types'
import {
    routes
} from '../router'
import Util from '../util/util'
import _ from 'lodash'

let routesInfo = Util.getRoutesInfo();

export default {
    [types.UPDATEMENULIST](state) {
        let menuList = []
        routes.forEach((item, index) => {
            if (item.children.length == 1) {
                item.path = `${item.path}/${item.children[0].path}`
            } else {
                item.children.forEach((item_children) => {
                    item_children.path = `${item.path}${item_children.path}`
                })
            }
            menuList.push(item);
        })
        state.menuList = menuList;
    },
    [types.UPDATECOLLAPSE](state) {
        state.collapse = !state.collapse;
    },
    [types.SETCURRENTMENU](state) {
        let _currentMenu = localStorage.currentMenu && JSON.parse(localStorage.currentMenu) || [{"name":"index","path":"/index","title":"首页"}];
        let _currentName = localStorage.currentName || 'index';
        state.currentMenu = _.uniqBy(_currentMenu, 'name');
        state.currentName = _currentName;
    },
    [types.UPDATECURRENTMENU](state, to) {
        let _currentMenu = state.currentMenu || [];
        if (!Util.isSomeRoute(_currentMenu, to)) {
            _currentMenu.push({
                name: to.name,
                path: to.path,
                title: routesInfo[to.name]
            })
        }
        state.currentMenu = _.uniqBy(_currentMenu, 'name');
        state.currentName = to.name;
        localStorage.currentMenu = JSON.stringify(_.uniqBy(_currentMenu, 'name'));
        localStorage.currentName = to.name;
    },
    [types.DELETECURRENTMENU](state, name) {
        let _currentMenu = _.remove(state.currentMenu, (n) => {
            return n.name != name;
        })
        state.currentMenu = _currentMenu;
        if(state.currentName == name){
            state.currentName = 'index';
            localStorage.currentName = 'index';
        }
        localStorage.currentMenu = JSON.stringify(state.currentMenu);
    },
    [types.TOOGLECURRENTMENU](state, info) {
        state.currentName = info.name;
        localStorage.currentName = info.name;
    }
}