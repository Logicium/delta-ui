<script setup lang="ts">
import {computed} from "vue";

const props = defineProps(['reviewText','person','image','stars'])
const imageUrl = computed(()=> 'url("'+props.image+'")').value;

import StarIcon from "@/assets/icons/StarIcon.vue";
</script>

<template>

  <div class="review">

    <div class="starGroup">
      <div class="stars">
        <StarIcon color="#B89230" v-for="i in stars"/>
        <StarIcon color="#A9A9A9FF" v-for="i in (5 - stars)"/>
      </div>
      <div>{{stars}}/5 Stars</div>
    </div>

    <div class="reviewDesc">{{reviewText}}</div>

    <div class="person">- {{person}}</div>

  </div>

  <div class="reviewImg"/>

</template>

<style scoped>

.review.active{
  transition: transform 0.3s ease-in-out;
}

.review{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: white;
  height: 20vh;
  border-radius: 4px;
}

.reviewDesc{
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.reviewImg{
  margin-top: -6vw;
  margin-left: auto;
  height: 12vw;
  width: 12vw;
  border-radius: 100%;
  background-image: v-bind(imageUrl);
  background-size: cover;
  background-position: 100% 100%;
  border: 12px solid #4242e7;
}

.starGroup{
  display: flex;
  justify-content: space-between;
}

.stars{
  display: flex;
  justify-content: space-between;
  width: 50%;
}


</style>
