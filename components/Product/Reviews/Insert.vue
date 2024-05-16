<template>
<Form 
  @submit="onSubmitReview"
  :validation-schema="schema"
  v-slot="{ errors }"
>
  

    <div>
        <span>{{ $t("Your rate") }}</span>
        <div class="flex">
            <span 
            v-for="(item, index) in ratingItems" 
            @mouseover="handleHoverStars(index)" 
            @mouseleave="handleLeaveStars(index)" 
            @click="handleActiveStars(index)"
            :class="{
              'active text-primary': index == 0,
              'text-gray-300': index != 0
            }"
            class="cursor-pointer text-2xl stars">
                ★
            </span>
            <!-- {{ rate }} -->
        </div>
    </div>
    <div>
        <Field 
            as="textarea"
            name="review"
            :placeholder="$t(`Comment`)"
            class="w-full border p-3 rounded-md mt-3 h-64 focus:border-primary outline-none transition max-h-64 min-h-64"
            :class="{ 
              'is-invalid': errors.review,
            }"
        >
        </Field>
        <div class="invalid-feedback">{{ errors.review }}</div>
    </div>
    <div>
        <button class="btn w-full" :disabled="MyReviewStore.loading">
            <p><loading-outlined v-if="MyReviewStore.loading" class="mr-3"/></p>
            <span>{{ $t("Add") }}</span> 
        </button>
    </div>
</Form>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";
  const props = defineProps(["id"])

  // Stores
  const MyReviewStore = useMyReviewStore()
  
  // Vars
  const rate = ref(1);
  const ratingItems = [1,2,3,4,5] 
  const schema = Yup.object().shape({
      review: Yup.string().required("هذا الحقل مطلوب"),
  });

  
  // Rating functional

  const onSubmitReview = (review) =>{
    MyReviewStore.INSERT_REVIEW(rate.value, review.review, props.id)
  }
  const handleHoverStars = (index) =>{
    for(var i=0;i<=index;i++){
      document.querySelectorAll('.stars')[i].classList.add('text-primary')
      document.querySelectorAll('.stars')[i].classList.remove('text-gray-300')
    }
  }
  const handleActiveStars = (index) =>{
    document.querySelectorAll('.stars').forEach(star=>{
      star.classList.add('text-gray-300')
      star.classList.remove('active')
    })
    for(var i=0;i<=index;i++){
      rate.value = index + 1
      document.querySelectorAll('.stars')[i].classList.add('active')
      document.querySelectorAll('.stars')[i].classList.remove('text-gray-300')
    }
  }
  const handleLeaveStars = (index) =>{
    for(var i=index; i >= 0; i--){
      
      if(document.querySelectorAll('.stars')[i].classList.contains('active')){
        return 
      }else{
        document.querySelectorAll('.stars')[i].classList.remove('text-primary')
        document.querySelectorAll('.stars')[i].classList.add('text-gray-300')

      }
    }
  }
</script>

<style>

</style>