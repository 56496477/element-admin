<template>
  <div id="app">
    <el-button type="primary" @click="init()">主要按钮</el-button>
    <el-button type="primary" @click="nprogress()">主要按钮</el-button>
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    let cc = Mock.mock({
      success: true,
      data: {
        "projects|3-10": [
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
    console.log(cc)
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

</style>
