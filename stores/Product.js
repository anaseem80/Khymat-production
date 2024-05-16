import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';
export const useProductStore = defineStore({
  id: 'ProductStore',
  state: () => ({ 
    loading:false,
    data:null,
    error:null,
    loading_add_product:null,
    loading_remove_product:false,
    loading_increase_decrease_product:false,
  }),
  actions: {
    async GET_PRODUCT_BY_ID(id){
      const { locale } = useI18n();
      const localePath = useLocalePath()
      this.loading = true;
      axios.get(BASE_URL + `/product/${id}?lang=${locale.value}`)
      .then(response=>{

          if(response.data.status_code == 200){
              this.loading = false;
              this.data = response.data
              document.querySelector('.header').classList.remove("menu_fixed_up");
          }
      })
      .catch(error=>{
        this.loading = false;
        if(error.response.data.status_code == 400){
            navigateTo(localePath('/error'))
        }
        message.error(error.response.data.message)
      })
    },
    async ADD_PRODUCT_TO_CART(id, quantity, attribute_id, lang){
        const CartStore = useMyCartStore();
        this.loading_add_product = { name: 'Add_Product_To_Cart' + id, status: true }
        axios.post(BASE_URL + `/cart/add?lang=${lang}&quantity=${quantity}&product_id=${id}${attribute_id != null ? `&attribute_id=${attribute_id}` : ''}`, null,{
            headers:{
                Authorization: 'Bearer ' + useCookie("token").value
            }
        })
        .then((response) => {
            if(response.data.status_code === 200){
                const existingItem = CartStore.cart.cart_items.find(item => 
                    item.product_id == response.data.product.product_id.toString()
                );
                if (existingItem) {
                    existingItem.quantity = parseInt(existingItem.quantity) + quantity;
                } else {
                    CartStore.cart.cart_items.push({
                        ...response.data.product, 
                        quantity
                    });
                }
                this.loading_add_product = { name: 'Add_Product_To_Cart' + id, status: false }
                CartStore.GET_CART_DATA()
                message.success(response.data.message + " 🥳")
            }
        })
        .catch((error) => {
            if(error){
              if(error.response.data.message == 'غير مصرح' || error.response.data.message == 'Unauthorized'){
                navigateTo(`/${lang}/login`)
              }
              message.error(error.response.data.message)
            }
            this.loading_add_product = { name: 'Add_Product_To_Cart' + id, status: false }
        })
    },
    async REMOVE_PRODUCT_FROM_CART(id){
        const CartStore = useMyCartStore();
        this.loading_remove_product = true
        axios.delete(BASE_URL + `/cart/remove?cart_id=${id}`,{
            headers:{
                Authorization: 'Bearer ' + useCookie("token").value
            }
        })
        .then((response) => {
        if(response.data.status_code == 200){
            const productIndex = CartStore.cart.cart_items.findIndex(item => item.id === id);
            if (productIndex > -1) {
                CartStore.cart.cart_items.splice(productIndex, 1);
                message.success(response.data.message)
            } else {
                message.info('Product not found in cart')
            }
            this.loading_remove_product = false
        }
        })
        .catch((error) => {
            message.error(error.response.data.message)
            this.loading_remove_product = false
        })
    },
    async Product_Increase_Decrease_From_Cart({id, type}){
        var sign = type === '+' ? 'increase' : 'reduce'
        const CartStore = useMyCartStore();
        this.loading_increase_decrease_product = true
        axios.post(BASE_URL + `/cart/${sign}?cart_id=${id}`, null, {
            headers:{
                Authorization: 'Bearer ' + useCookie("token").value
            }
        })
        .then((response) => {
            if(response.data.status_code === 200){
                const productIndex = CartStore.cart.cart_items.findIndex(item => item.id === id);
                if (productIndex > -1) {
                    const currentQuantity = parseInt(CartStore.cart.cart_items[productIndex].quantity, 10);
                    if (!isNaN(currentQuantity)) {
                        if (type === '+') {
                            CartStore.cart.cart_items[productIndex].quantity = currentQuantity + 1;
                        } else if (type === '-' && currentQuantity > 1) {
                            CartStore.cart.cart_items[productIndex].quantity = currentQuantity - 1;
                        } else if (type === '-' && currentQuantity === 1) {
                            message.success('Product Removed From Cart')
                            CartStore.cart.cart_items.splice(productIndex, 1);
                        }
                    } else {
                        message.error("Invalid quantity");
                    }
                } else {
                    message.error("Product not found in cart");
                }
                
                this.loading_increase_decrease_product = false
                message.success(response.data.message);
            }
        })
        .catch((error) => {
            if(error.response && error.response.data){
            message.error(error.response.data.message);
            } else {
                message.error("An error occurred");
            }
            this.loading_increase_decrease_product = false
        });
    },
  },
})
