<script setup lang="ts">


import StarIcon from "@/assets/StarIcon.vue";
import Panel from "@/components/Panel.vue";
import data from "@/data/data.ts";
import Map from "@/components/Map.vue";
import Review from "@/components/Review.vue";
import {ref} from "vue";

const review1Active = ref(true);
const review2Active = ref(false);
const review3Active = ref(false);

data.reviews[0].active = review1Active;
data.reviews[1].active = review2Active;
data.reviews[2].active = review3Active;

console.log(data.reviews);


const toggleControl1 = function (){
  review1Active.value = true;
  review2Active.value = false;
  review3Active.value = false;
}

const toggleControl2 = function (){
  review2Active.value = true;
  review3Active.value = false;
  review1Active.value = false;
}
const toggleControl3 = function (){
  review3Active.value = true;
  review2Active.value = false;
  review1Active.value = false;
}

</script>

<template>
<div>

  <div class="banner">

    <div class="bannerInfo">
      <div class="title">Get the most bang for your buck</div>
      <div class="subtitle">At Delta Thrift, we take pride in offering only the highest quality vintage thrift finds, from clothes, to antiques, and furniture, experience a world of forgotten treasures.</div>
      <div class="button-rev">ORDER NOW</div>
    </div>

    <div class="reviews">
    <template v-for="review in data.reviews">

      <Review  :person="review.person" :review-text="review.reviewText" :image="review.image" v-if="review.active.value"/>

    </template>

      <div class="controls">
        <div :class="review1Active ? 'active control' : 'control'" @click="toggleControl1"/>
        <div :class="review2Active ? 'active control' : 'control'" @click="toggleControl2"/>
        <div :class="review3Active ? 'active control' : 'control'" @click="toggleControl3"/>
      </div>

    </div>


  </div>

  <Panel title="ABOUT US" :subtitle="data.about1">
    <div class="imageArea">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
    </div>
  </Panel>

  <Panel title="LOCATION" :subtitle="data.about1" color="#4242e7" text-color="white">

    <div class="map">
      <Map/>
    </div>

  </Panel>

  <Panel title="CONTACT US" :subtitle="data.about1"/>

</div>


</template>


<style scoped>

.map{
  padding: 2rem;
  width: 60%;
  height: 100%;
}

.imageArea{
  display: grid;
  margin-top: 2rem;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 30vh;
}

.reviews{
  width: 40%;
  margin: 2rem;
  margin-left: auto;
  position: relative;
  height: fit-content;
  align-self: center;
}

.img1,.img2,.img3{
  background-image: url("../../public/thrift2.jpg");
  background-size: cover;
  background-position: 100% 100%;
}

.img2{
  background-image: url("../../public/thrift3.jpg");
}

.img3{
  background-image: url("../../public/thrift4.jpg");
}


.controls{
  padding: 2rem;
  display: flex;
  width: 60%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
}

.control.active{
  border: 6px solid #4242e7;
}

.control{
  background-color: white;
  border-radius: 100%;
  border: 6px solid #a9a9a9;
  height: 3vw;
  width: 3vw;
  cursor: pointer;
}

.bannerInfo{
  background-color: #4242e7;
  width: 40%;
  height: fit-content;
  color: white;
  margin: 2rem;
  align-self: center;
}

.title{
  font-size: 4vw;
  line-height: 4vw;
  padding: 2rem;
}
.subtitle{
  padding: 2rem;
}

.button-rev{
  margin: 2rem;
  cursor: pointer;
  border-radius:4px;
  padding: 1vw;
  color: #4242e7;
  background-color: white;
  width: fit-content;
}


.banner{
  position: relative;
  display: flex;
  height: 60vh;
  background-image: url("../../public/thrift1.jpg");
  background-size: cover;
  background-position: 100% 100%;
}

</style>
