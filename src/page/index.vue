<template>
<div>
 <Header></Header>
  <Home></Home>
 <Footer></Footer> 
</div>
  
</template>
<script>
  import Header from "@/common/header"
  import Home from "@/page/Home/home"
  import Footer from "@/common/footer"
  export default {
    components:{
      Header,
      Home,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/mixin";






</style>
