import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMyCartStore = defineStore({
  id: 'myCartStore',
  state: () => ({ 
    cart:null,
    coupon: null,
    tax: null,
    couponApplied: false,
    taxApplied: false,
    loading_cart: null,
    loading_coupon: false,
    loading_tax: false,
    loading_order: false,
    clear_cart_loading: null
  }),
  actions: {
    async GET_CART_DATA(lang){
      this.loading_cart = true
      const store = useLogoutStore()
      if(useCookie("token").value){
        await axios.get(BASE_URL + `/cart/items?lang=${lang}`, {
            headers:{
                Authorization: 'Bearer ' + useCookie("token").value
            }
        })
        .then(response=>{
            if(response.data.status_code == 200){
                this.loading_cart = false
                this.cart = response.data
            }
        })
        .catch(error=>{
          this.loading_cart = false
          if(error.response.data.message == 'Unauthorized' && useCookie("token").value){
            store.LOGOUT()
          }
          if(error.response.data.message == 'غير مصرح' && useCookie("token").value){
            store.LOGOUT()
          }
        })
      }
    },
    async CLEAR_CART(){
      this.clear_cart_loading = true
      axios.delete(BASE_URL + `/cart/clear`,{
          headers:{
              Authorization: 'Bearer ' + useCookie("token").value
          }
      })
      .then((response) => {
          if(response.status == 200){
            message.success(response.data.message)
            this.cart.cart_items = []
            this.clear_cart_loading = false
          }
      })
      .catch((error) => {
          message.error(error.response.data.message)
          this.clear_cart_loading = false
      })
    },
    async APPLY_COUPON(coupon){
      this.loading_coupon = true
      axios.post(BASE_URL + `/cart/applycoupon?&coupon_code=${coupon}`,null,{
          headers:{
              Authorization: 'Bearer ' + useCookie("token").value
          },
      })
      .then((response) => {
      if(response.data.status_code == 200){
          message.success(`Great work! you saved ${response.data.coupon['discount_amount']}AED 😍🥳`)
          this.coupon = response.data.coupon
          this.cart.cart_prices.total_shipping_fee = response.data.cart_prices.total_shipping_fee
          this.cart.cart_prices.total_discount = response.data.cart_prices.total_discount
          this.cart.cart_prices.subtotal = response.data.cart_prices.subtotal
          this.cart.cart_prices.total = response.data.cart_prices.total
          this.loading_coupon = false
          this.couponApplied = true
      }
      })
      .catch((error) => {
          message.error(error.response.data.message)
          this.loading_coupon = false
      })
    },
    async APPLY_TAX(address_id){
      this.loading_tax = true
      this.taxApplied = false
      axios.get(BASE_URL + `/cart/checkout?${this.coupon != null ? `coupon_code=${this.coupon.code}&` : ''}user_address_id=${address_id}`,{
          headers:{
              Authorization: 'Bearer ' + useCookie("token").value
          },
      })
      .then((response) => {
      if(response.data.status_code == 200){
          message.success(response.data.message)
          this.tax = response.data.check_out
          this.loading_tax = false
          this.taxApplied = true
      }
      })
      .catch((error) => {
          message.error(error.response.data.message)
          this.loading_tax = false
          this.taxApplied = true
      })
    },
    async ORDER_CREATE(user_address_id, payment_method, description){
      const localePath = useLocalePath()
      this.loading_order = true
      if(payment_method=='stripe' || payment_method=='paypal'){
          window.location.replace(BASE_URL + `/orders/create?${this.coupon != null ? `coupon_code=${this.coupon.code}&` : ''}${description != "" ? `description=${description}&` : ''}user_address_id=${user_address_id}&payment_method=${payment_method}&token=${useCookie("token").value}`)
      }
      axios.get(BASE_URL + `/orders/create?${this.coupon != null ? `coupon_code=${this.coupon.code}&` : ''}user_address_id=${user_address_id}&payment_method=${payment_method}&token=${useCookie("token").value}`,{
          headers:{
              Authorization: 'Bearer ' + useCookie("token").value
          },
      })
      .then((response) => {
      this.loading_order = false

      if(response.data.order_id){
          message.success(response.data.message)
          this.cart.cart_items = []
          navigateTo(localePath('/'))
          this.loading_order = false
      }
      })
      .catch((error) => {
          message.error(error.response.data.message)
          this.loading_order = false
      })
    },
    async CANCEL_COUPON(){
      this.coupon = null
      this.couponApplied = false
    },
  },
  getters:{
    SUB_TOTAL: (state) => {
      if(state.cart != null){
        return state.cart.cart_items.reduce((acc, item) => {
          const price = item.attribute && item.attribute.price ? parseFloat(item.attribute.price) : parseFloat(item.price);
          return acc + (price * parseInt(item.quantity));
        }, 0).toFixed(2);
      }else{
        return
      }
    },
    TOTAL_AMOUNT: (state) => {
      const subtotal = parseFloat(state.SUB_TOTAL);
      const totalDiscount = parseFloat(state.TOTAL_DISCOUNT);
      const shippingFee = parseFloat(state.SHIPPING_FEE);
      const countryTax = parseFloat(state.COUNTRY_TAX);
      if(state.cart != null){
        const totalAmount = subtotal - totalDiscount + shippingFee + countryTax;
        return totalAmount.toFixed(2);
      }else{
        return
      }
    },
    COUNTRY_TAX: (state) => {
      return state.tax ? parseFloat(state.tax.country_tax) : 0;
    },
    SHIPPING_FEE: (state) => {
      if(state.cart != null){
        let total_shipping = state.cart.cart_items.map(item => {
          return item.shipping_fee * item.quantity
        });
        return total_shipping.reduce((partialSum, a) => partialSum + a, 0);
      }else{
        return
      }
    },
    TOTAL_DISCOUNT: (state) => {
      const couponDiscount = parseFloat(state.COUPON_DISCOUNT);
      if(state.cart != null){
        let total_discount = state.cart.cart_items.map(item => {
          return item.discount * item.quantity
        });
        let total_discount_calc = total_discount.reduce((partialSum, a) => partialSum + a, 0);
        return total_discount_calc < 0 ? 0 : total_discount_calc + couponDiscount;

      }else{
        return
      }
    },
    COUPON_DISCOUNT: (state) => {
      return state.coupon ? parseFloat(state.coupon.discount_amount) : 0;
    },
  }
})
