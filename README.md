# element-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# mock数据
import Mock from "mockjs"
let mocks = Mock.mock({
    success: true,
    data: {
    "projects|10": [
        {
        name: "演示用",
        url: "@url",
        email: "@email",
        address: "@county(true)",
        "string|1-10": "★",
        "number|1-100": 100,
        "boolean|1-2": true,
        "object|2": {
            "310000": "上海市",
            "320000": "江苏省",
            "330000": "浙江省"
        }
        }
    ]
    }
});
