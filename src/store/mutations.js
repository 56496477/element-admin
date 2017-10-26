import  * as types from './types';
import { routes } from '../router'

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
        console.log(menuList)
        state.menuList = menuList;
    }
}