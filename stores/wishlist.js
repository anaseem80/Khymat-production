import { defineStore } from 'pinia'

export const useMyWishlistStore = defineStore({
  id: 'myWishlistStore',
  state: () => ({
    wishlist: [],
    loading_remove_item: false,
  }),
  actions: {
    INSERT_TO_WISHLIST(product){
      const localePath = useLocalePath()
      if(!useCookie("token").value){
        navigateTo(localePath('/login'))
        message.error("يجب تسجيل الدخول اولاً")
      }else{
        const existingItem = this.wishlist.find(item => 
            item.id == product.id
        );
        if (!existingItem) {
          this.wishlist.push(product);
        }
        message.success("🥳 تمت إضافة المنتج بنجاح إلي المفضلة")
      }
    },
    DELETE_FROM_WISHLIST(product){
      this.loading_remove_item = true;
      const existingItem = this.wishlist.findIndex(item => item.id === product.id);
      if (existingItem > -1) {
        this.wishlist.splice(existingItem, 1);
        this.loading_remove_item = false;
        message.success("🥳 تمت حذف المنتج بنجاح من المفضلة")
      }
    },
  },
  persist: true,
})
