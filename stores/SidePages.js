import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMySidePagesStore = defineStore({
  id: 'mySidePagesStore',
  state: () => ({
    terms: [],
    privacy: [],
    faq: [],
    loading_terms: false,
    loading_privacy: false,
    loading_faq: false,
  }),
  actions: {
    async GET_TERMS(){
      this.loading_terms = true
      const { locale } = useI18n();
      await axios.get(BASE_URL + `/terms?lang=${locale.value}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_terms = false
              this.terms = response.data.terms
          }
      })
      .catch(error=>{
        this.loading_terms = false
      })
    },
    async GET_PRIVACY(){
      this.loading_privacy = true
      const { locale } = useI18n();
      await axios.get(BASE_URL + `/privacy?lang=${locale.value}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_privacy = false
              this.privacy = response.data.privacy
          }
      })
      .catch(error=>{
        this.loading_privacy = false
      })
    },
    async GET_FAQ(){
      this.loading_faq = true
      const { locale } = useI18n();
      await axios.get(BASE_URL + `/faqs?lang=${locale.value}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_faq = false
              this.faq = response.data.data.faqs.data
          }
      })
      .catch(error=>{
        this.loading_faq = false
      })
    },
  }
})
