import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const state = {
  login: false,
  cartList: [
    {
      productId:0,
      productName:'假充电宝',
      productPrice:'99',
      productImg:'http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg'
    },
    {
      productId:1,
      productName:'假充电宝',
      productPrice:'99',
      productImg:'http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg'
    },
    {
      productId:2,
      productName:'假充电宝',
      productPrice:'99',
      productImg:'http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg'
    }
  ]
}

export default new Vuex.Store({
  state,
  // action,
  // mutations
})

