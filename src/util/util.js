import _ from 'lodash'
import { routes } from '../router'

let util = {};

util.isSomeRoute = (routes, single) => {
    let _is = false;
    routes.forEach((item) => {
        if(item.name == single.name){
            _is = false;
        }
    })
    return _is;
}

util.getRoutesInfo = () => {
    let _s = {};
    routes.forEach((item) => {
        if(item.children.length > 1){
            item.children.forEach((c) => {
                _s[c.name] = c.title;
            })
        } else {
            _s[item.name] = item.title;
        }
    })
    return _s;
}

export default util;