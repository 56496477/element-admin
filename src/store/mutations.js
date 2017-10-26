import  * as types from './types'
import { routes } from '../router'
import _ from 'lodash'

export default {
    [types.UPDATEMENULIST](state){
        let menuList = []
        routes.forEach((item,index) => {
            if(item.children.length == 1){
                item.path = `${item.path}/${item.children[0].path}`
            }else{
                item.children.forEach((item_children) => {
                    item_children.path = `${item.path}${item_children.path}`
                })
            }
            menuList.push(item);
        })
        state.menuList = menuList;
    },
    [types.UPDATECOLLAPSE](state){
        state.collapse = !state.collapse;
    },
    [types.SETCURRENTMENU](state, to){
        let _currentMenu = localStorage.currentMenu && JSON.parse(localStorage.currentMenu) || [];
        if(to){
            debugger
            if(!_.some(_currentMenu, to)){
                _currentMenu.push({
                    name: to.name,
                    path: to.path
                })
            }
            localStorage.currentName = to.name;
            state.currentName = to.name;
        }
        localStorage.currentMenu = JSON.stringify(_.uniqBy(_currentMenu, 'name'));
        state.currentMenu = _.uniqBy(_currentMenu, 'name');
    },
    [types.DELETECURRENTMENU](state, name){
        state.currentMenu = _.remove(state.currentMenu, (n) => {
            return n.name != name;
        })
        localStorage.currentMenu = JSON.stringify(state.currentMenu);
    },
    [types.TOOGLECURRENTMENU](state, info){
        state.currentName = info.name;
        localStorage.currentName = info.name;
    }
}