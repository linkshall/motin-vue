<template>
  <div class="header-box">
    <div>
      <header class="w">
        <div class="w-box">
          <div class="nav-logo">
            <h1><router-link to="/" title="logo链接主页隐藏文字">微软开发</router-link></h1>
          </div>
          <div class="right-box">
            <div class="nav-list">
              <router-link to="goods">全部商品</router-link>
            </div>
            <div class="nav-aside">
                <div class="user">
                  <router-link to="user">个人中心</router-link>
                  <div class="nav-user-wrapper">
                    <div class="nav-user-list">
                      <ul>
                        <li class="nav-user-avatar">
                          <div>
                            <span class="avatar"></span>
                            <p class="name">用户名</p>
                          </div>
                        </li>
                        <li>
                          <router-link to="/user/orderList">我的订单</router-link>
                        </li>
                        <li>
                          <router-link to="/user/information">账号资料</router-link>
                        </li>
                        <li>
                          <router-link to="/user/addressList">收货地址</router-link>
                        </li>
                        <li>
                          <router-link to="/user/support">售后服务</router-link>
                        </li>
                        <li>
                          <router-link to="/user/coupon">我的优惠</router-link>
                        </li>
                        <li>
                          <a href="javascript:;">退出</a>
                        </li>
                      </ul>
                    </div>
                   
                  </div>
                </div>
                 <div class="shop">
                      <router-link to="/cart"></router-link>
                      <span class="cart-num"><i class="num move_in_cart"></i></span>
                      <div class="user-wrapper">
                        <div class="full">
                          <div class="nav-cart-items">
                            <ul>
                              <li class="clearfix" v-for="item in cartList" :key="item.productId">
                                <div class="cart-item">
                                  <router-link :to="'goodsDetails?productId='">
                                    <div class="item-thumb"> <img :src="item.productImg"></div>
                                  </router-link>
                                </div>
                                <div class="item-desc">
                                  <div class="cart-cell">
                                    <h4>
                                      <a href="" v-text="item.productName"></a>
                                    </h4>
                                    <p class="attrs">
                                      <span>白色</span>
                                    </p>
                                    <h6>
                                      <span class="price-ican">¥</span>
                                      <span class="price-num">{{item.productPrice}}</span>  
                                      <span class="item-num">x{{item.productNum}}</span>
                                    </h6>
                                  </div>
                                </div>
                                <div class="del-btn"></div>
                              </li>
                            </ul>
                          </div>
                          <!-- <div class="nav-cart-total">
                            <p>共{{totalNum}}件商品</p>
                            <p>合计{{totalNum}}</p>
                          </div> -->
                        </div>
                        <!-- <div>你的购物竟然是空的</div> -->
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
  import store from '@/store/index'
  import {mapState,mapMutations} from 'vuex'
  export default {
    store,
    data () {
      return {
        user: {}
      }
    },
    computed:{
      ...mapState([
        'login', 
        'cartList'
      ])
    },
    mounted(){
      console.log(this.cartList)
    }
  }
</script>
<style lang="scss">
  @import "~@/assets/style/theme";
  @import "~@/assets/style/mixin";

  .header-box {
    width: 100%;
    background: $main-col;
    background-image: linear-gradient(#000,#121212);
    
    header.w {
      height: 1rem;
      position: relative;
      margin: 0 auto;
      width: 12.2rem;
      
      .w-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height:100%;
        a {
            color:$cc;
        }
      }
      .right-box {
        display: flex;
        .nav-list {
          display:flex;
          align-items: center;
          a{
                padding:0 .25rem;
            margin-right:.22rem;
          }
        }

      }

      .nav-aside{
        display: flex;
        position: relative;
        &::before {
          background: #333;
          background: hsla(0, 0%, 100%, .2);
          content: " ";
          @include wh(1px, 13px);
          overflow: hidden;
          position: absolute;
          top: 4px;
          left: 0;
        }
      }
      .user {
          margin-left:.41rem;
        >a {
          @include wh(.36rem, .2rem);
          text-indent: -9999px;
          display: block;
          position: relative;
          &::before {
            position: absolute;
            left: 8px;
            top: 0;
            content:' ';
            @include wh(.2rem);
            background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px 0;
            background-size: 240px 107px;
          }
        }
      }

      .shop {
        position: relative;
        float: left;
        margin-left: 21px;
        width: 61px;
        z-index: 99;
              > a {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        right: 0;
        z-index: 1;
        &:before {
          display: block;
          @include wh(30px, 100%);
          content: " ";
          background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
          background-size: 240px 107px;
          background-position: -150px -22px;
        }
      }
      }

// 个人中心和购物车的detal块
      .user-wrapper,.nav-user-wrapper {
        position: absolute;
        display: none;
      }
      
    }  
  }
  
  
</style>

