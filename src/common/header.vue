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
                  <div class="nav-user-wrapper" v-if="login">
                    <div class="nav-user-list">
                      <ul>
                        <li class="nav-user-avatar">
                          <div>
                            <span class="avatar" :style="{backgroundImage:'url('+userInfo.info.avatar+')'}"></span>
                          </div>
                          <p class="name">{{userInfo.info.name}}</p>
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
                          <a href="javascript:;" @click="_loginOut">退出</a>
                        </li>
                      </ul>
                    </div>
                   
                  </div>
                </div>
                 <div class="shop" @mouseover="cartShowState(true,true)" @mouseout='cartShowState(false)'>
                      <router-link to="/cart"></router-link>
                      <span class="cart-num"><i class="num move_in_cart">0</i></span>
                      <div class="nav-user-wrapper" v-show="showCart">
                        <div class="nav-user-list">
                          <div class="full">
                            <div class="nav-cart-items">
                              <ul>
                                <li class="cart-item" v-for="item in cartList" :key="item.productId">
                                    <div class="cart-item-inner">
                                      <router-link :to="'goodsDetails?productId='">
                                        <div class="item-thumb"> <img :src="item.productImg"></div>
                                      </router-link>
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
                                            <span class="price-num">22</span>  
                                            <span class="item-num">x33</span>
                                          </h6>
                                        </div>
                                      </div>
                                      <div class="del-btn"></div>
                                    </div>
                                </li>
                              </ul>
                              </div>
                              <div class="nav-cart-total"><p>共 <strong>1</strong> 件商品</p> <h5>合计：<span
                                class="price-icon">¥</span><span
                                class="price-num">1</span></h5>
                                <h6>
                                  <y-button classStyle="main-btn"
                                            style="height: 40px;width: 100%;margin: 0;color: #fff;font-size: 14px;line-height: 38px"
                                            text="去购物车" @btnClick="toCart"></y-button>
                                </h6>
                              </div>
                          </div>
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
  import YButton from '@/components/ybutton'
  import { mapState, mapMutations } from 'vuex'
  export default {
    store,
    data () {
      return {
        user: {}
      }
    },
    methods: {
      ...mapMutations(['SHOW_CART']),
      cartShowState(state,onmouse) {
        this.SHOW_CART({showCart:state,onmouse:onmouse})
      },
      toCart () {
        this.$router.push({path: 'cart'})
      },
      _loginOut () {
        
      }
    },
    computed:{
      ...mapState([
        'login', 
        'userInfo',
        'cartList',
        'showCart'
      ])
    },
    components: {
      YButton
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

      .nav-user-wrapper {
        position: absolute;
        padding-top: .18rem;
        top:.18rem;
        .nav-user-list {
          background: #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,.15);
          border-color: rgba(0,0,0,.08);
          border: 1px solid #d6d6d6;
        }
      }
// 用户
      .user {
        &:hover {
          .nav-user-wrapper {
            display: block;
          }
        }
        margin-left:.41rem;
        .nav-user-wrapper {
          display: none;
          width: 1.68rem;
          left: 50%;
          transform: translateX(-63%);
        }
        .name {
          font-size: .12rem;
          margin-bottom: .16rem;
          line-height: 1.5;
          text-align: center;
        }
        .nav-user-avatar div{
          margin: 0 auto .08rem;
          @include wh(.46rem);
          .avatar {
            display: block;
            width: 100%;
            height: 100%;
            background-size: contain;
            border-radius: 50%;
          }
        }
        .nav-user-list {
          border-radius: .08rem;
          padding-top: .2rem;
          & li+li {
          height: .44rem;
          line-height: .44rem;
          font-size: .12rem;
          border-top: 1px solid #f5f5f5;
          }
          & a{
            display: block;
            text-align: center;
            color: #616161;
          }
          &::before {
            position: absolute;
            display: block;
            content: ' ';
            border-width: 0.12rem;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-color: transparent transparent #fff transparent;
            border-style: solid;
          }
        }
        
        > a {
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
// 购物车
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
        .cart-num {
          position: absolute;
          right: 0;
          i {
            line-height: .2rem;
            color: #fff;
            text-align: center;
            font-style: normal;
            display: block;
            background: #969696;
            box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
            background-image: linear-gradient(#a4a4a4,#909090);
            border-radius: 1rem;
            @include wh(.2rem);

          }
        }
        .nav-user-wrapper {
          width: 3.6rem;
          right: 0;
          .nav-user-list {
            border-radius: .08rem;
            &::before {
              position: absolute;
              display: block;
              content: ' ';
              border-width: 0.12rem;
              top: 0;
              left: 84%;
              border-color: transparent transparent #fff transparent;
              border-style: solid;
            }
          }
        } 

        .item-thumb {
          position: relative;
          float: left;
          width: 80px;
          height: 80px;
          border-radius: 3px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            border: 1px solid #f0f0f0;
            border: 0 solid transparent;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
            border-radius: 3px;
          }
          img {
            display: block;
            @include wh(80px, 80px);
            border-radius: 3px;
            overflow: hidden;
          }
        }
        .full {
          overflow: hidden;
          border-radius: .08rem;
        }
        .nav-cart-items {
          max-height: 3.63rem;
          overflow-x: hidden;
          overflow-y: auto;
          .cart-item {
            border-radius: .08rem .08rem 0 0;
            width: 100%;
            height: 1.2rem;
            &:first-child .cart-item-inner {
              border-top: none;
            }
            .cart-item-inner {
              position: relative;
              padding: .19rem;
              border-top: 1px solid #f0f0f0;

            }
            .item-desc {
              margin-left: 98px;
              display: table;
              @include wh(205px, 80px);
              h4 {
                color: #000;
                width: 185px;
                overflow: hidden;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 14px;
                line-height: 16px;
                margin-bottom: 10px;
              }
              .attrs span {
                position: relative;
                display: inline-block;
                margin-right: 20px;
                font-size: 14px;
                line-height: 14px;
                color: #999;
              }
              .attrs span:last-child {
                margin-right: 0;
              }
              h6 {
                color: #cacaca;
                font-size: 12px;
                line-height: 14px;
                margin-top: 20px;
                span {
                  display: inline-block;
                  font-weight: 700;
                  color: #cacaca;
                }
                .price-icon, .price-num {
                  color: #d44d44;
                }
                .price-num {
                  margin-left: 5px;
                  font-size: 14px;
                }
                .item-num {
                  margin-left: 10px;
                }
          }

        }
          }
        }

        .nav-cart-total {
          height: .4rem;
          padding: .2rem;
          position: relative;
          box-sizing: content-box;
          border-top: 1px solid #f0f0f0;
          box-shadow: inset 0 -1px 0 hsla(0,0%,100%,.5), 0 -3px 8px rgba(0,0,0,.04);
          p {
            margin-bottom: 4px;
            line-height: 16px;
            font-size: 12px;
            color: #c1c1c1;
          }
          h5 {
            line-height: 20px;
            font-size: 14px;
            color: #6f6f6f;
            span {
              font-size: 18px;
              color: #de4037;
              display: inline-block;
              font-weight: 700;
            }
            span:first-child {
              font-size: 12px;
              margin-right: 5px;
            }
          }
          h6 {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 108px;
          }
        }

      }


      
    }  
  }
  
  
</style>

