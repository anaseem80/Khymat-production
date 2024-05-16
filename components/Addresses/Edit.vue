<template>
  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div v-if="addressStore.activeAddress == address.id" @click="clickedOutside($event.target)" class="backdrop-blur-sm grid fixed inset-0 z-50 bg-gray-500 bg-opacity-50 p-3 overflow-y-scroll">
      <div 
        class="rounded-lg bg-white p-3 w-full md:w-8/12 m-auto relative"
      >
        <span class="absolute left-2 md:right-2" @click="CloseModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-modal text-gray-600 hover:text-red-600 w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>
        <div class="flex md:flex-row flex-col md:p-4 gap-8">        
          <Form
              class="w-full"
              @submit="onSubmitAddress"
              v-slot="{ errors }"
              :validation-schema="AddressSchema"
          >
          <div class="md:grid md:grid-cols-2 gap-4">
            <div class="form-group">
              <label for="name" class="text-lg block">{{ $t("First name") }}</label>
              <Field 
                type="text" 
                id="name" 
                name="name" 
                :value="props.address.name"
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.name,
                }"
              />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="form-group">
              <label for="last_name" class="text-lg block">{{ $t("Last Name") }}</label>
              <Field 
                type="text" 
                id="last_name" 
                name="last_name"
                :value="props.address.name"
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.last_name,
                }"
              />
              <div class="invalid-feedback">{{ errors.last_name }}</div>
            </div>
            <div class="form-group">
              <label for="email" class="text-lg block">{{ $t("Email") }}</label>
              <Field 
                type="email" 
                id="email" 
                name="email" 
                :value="props.address.email"
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.email,
                }"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="form-group">
              <label for="phone" class="text-lg block">{{ $t("Phone") }}</label>
              <Field 
                type="tel" 
                id="phone" 
                name="phone"
                :value="props.address.phone"
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.phone,
                }"
              />
              <div class="invalid-feedback">{{ errors.phone }}</div>
            </div>
            <div class="grid xl:grid-cols-1 md:col-span-2 gap-4">
              <div class="form-group">
                <label for="country" class="text-lg block">{{ $t("Country") }}</label>
                <Field 
                  as="select"
                  id="country" 
                  name="country"
                  :value="props.address.country"
                  class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                  :class="{ 
                    'is-invalid': errors.country,
                  }"
                >
                <option value="" disabled>{{ $t("Choose Country") }}</option>
                <option :value="country.name" v-for="country in MyCountriesStore.countries">
                  {{ locale == 'en' ? country.name_en : country.name }}
                </option>
              </Field>
              <div class="invalid-feedback">{{ errors.country }}</div>
              </div>
            </div>
            <div class="grid xl:grid-cols-1 md:col-span-2 gap-4">
              <label for="address_2" class="text-lg block">{{ $t("Detailed address") }}</label>
              <Field 
                  as="textarea"
                  id="address_2" 
                  name="address_2"
                  :value="props.address.address_2"
                  class="w-full p-4 pb-[92px] rounded border outline-none focus:border-primary"
                  :placeholder="$t(`Detailed address`)"
                  :class="{ 
                    'is-invalid': errors.address_2,
                  }"
                >
              </Field>
              <div class="invalid-feedback">{{ errors.address_2 }}</div>
            </div>
            <AddressesMap />
          </div>
            <button 
              :disabled="AddressStore.loading_update_address"
              class="btn mt-6 w-full"
            >
            <span class="translate-y-[-2px]">{{ $t("Save Changes") }} <loading-outlined class="text-white drop-shadow-lg mr-3" v-if="AddressStore.loading_update_address"/></span> 
            
          </button>
        </Form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Stores
  const addressStore = useMyAddressStore();
  const AddressStore = useMyAddressStore();
  const MyCountriesStore = useMyCountriesStore();

  MyCountriesStore.GET_COUNTRIES()

  // i18n
  const { locale } = useI18n();

  // Things
  const props = defineProps(['address', 'active'])
  const emits = defineEmits(['closeModal']);
  const CloseModal = () =>{
    addressStore.CLOSE_MODAL()
  }


  // Functions
  const AddressSchema = Yup.object().shape({
    name: Yup.string().required('الاسم الأول مطلوب'),
    last_name: Yup.string().required('الاسم الأخير مطلوب'),
    email: Yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صالح'),
    phone: Yup.string().required('رقم الهاتف مطلوب'),
    country: Yup.string().required('الدولة مطلوبة'),
    address_2: Yup.string().required('العنوان بالتفصيل مطلوب'),
  });
  const onSubmitAddress = async (address) =>{
    address.latitudes = props.address.latitudes
    address.longitude = props.address.longitude
    address.location_id = AddressStore.location_id
    address.id = props.address.id
    addressStore.UPDATE_ADDRESS(address)
  }
  const clickedOutside = (target) => {
    if (target.classList.contains('close-modal') || target.classList.contains('backdrop-blur-sm')) {
      addressStore.CLOSE_MODAL()
    }
  }
</script>

<style>

</style>