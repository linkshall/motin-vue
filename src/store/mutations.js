const INIT_BAYCART = 'INIT_BAYCART'
const SHOW_CART = 'SHOW_CART'

export default {


  [SHOW_CART] (state,{showCart,onmouse = false}) {
    state.showCart = showCart
    function handle(){
      state.showCart = false
      window.removeEventListener('scroll',handle)
    }
    if(showCart&&!onmouse){
      window.addEventListener('scroll',handle)
    }
  }


}