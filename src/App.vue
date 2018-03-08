<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~@/assets/style/reset";
    @import "~@/assets/style/theme";
    html {
      font-size: 100px;
    }
    body {
      font-size: .14rem;
      font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,\\5FAE\8F6F\96C5\9ED1,STHeiti,\\534E\6587\7EC6\9ED1,sans-serif;
      color:$main-col;
    }
    ul li{
        list-style: none;
    }
    a {
      text-decoration:none;
      color:$main-col;
    }
    .main {
    background:#ededed;
    }
</style>

