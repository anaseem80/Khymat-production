import { defineStore } from 'pinia'
import { mande } from 'mande'
import axios from 'axios'
import { BASE_URL } from './base/api';
import VueCookies from 'vue-cookies'
export const useLoginStore = defineStore({
  id: 'LoginStore',
  state: () => ({
    loading: false,
    social_loading:false,
    error: false,
    data:null,
  }),
  actions: {
    async LOGIN(data, lang){
      this.loading = true
      axios.post(BASE_URL + "/login", data)
      .then((response) => {
          if (response.data.token) {
            this.loading = false;
            const token = useCookie('token');
            token.value = response.data.token;          
            message.success(lang == 'ar' ? "تم التسجيل بنجاح" : "Logged in successfully");
            navigateTo(`/${lang}`)
            const CartStore = useMyCartStore();
            CartStore.GET_CART_DATA(lang)
            setTimeout(() => {
              window.location.reload()
            }, 500);
          }
      })
      .catch((error) => {
          this.loading = false
          if (error.response.data.message === "Email not verified." || error.response.data.message === "البريد الإلكتروني لم يتم التحقق منه.") {
              message.error("لم يتم تفعيل الإيميل");
              const mainStore = useMainStoreStore();
              mainStore.Verfiy_Modal()
              mainStore.reset_verify = "verify";
              mainStore.swiper.slideTo(2);
              mainStore.email = data.email
          } else {
              message.error(error.response.data.message);
          }
      });
    },
    async SOCIAL_LOGIN(data, lang){
      this.social_loading = true
      axios.post(BASE_URL + "/social/register", data)
      .then((response) => {
          if (response.data.token) {
            this.social_loading = false;
            const token = useCookie('token');
            token.value = response.data.token;          
            message.success("تم التسجيل بنجاح");
            navigateTo(`/${lang}`)
            const CartStore = useMyCartStore();
            CartStore.GET_CART_DATA(lang)
          }
      })
      .catch((error) => {
        message.error(error.response.data.message);
        this.social_loading = false;
      });
    }
  }
})
