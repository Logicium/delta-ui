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

const playback = ref(true);

data.reviews[0].active = review1Active;
data.reviews[1].active = review2Active;
data.reviews[2].active = review3Active;

const loopReviews = function(){

  if(playback.value){
    setTimeout(() => {
      if(playback.value){
        toggleControl1();
        setTimeout(() => {
          if(playback.value){
            toggleControl2();
            setTimeout(() => {
              if(playback.value){
                toggleControl3();
                loopReviews();
              }
            },3000)
          }
        },3000)
      }
    },3000)

  }

}

loopReviews();

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
      <div class="headline">{{data.headline}}</div>
      <div class="button-rev">ORDER NOW</div>
    </div>

    <div class="reviews">
    <template v-for="review in data.reviews">

      <Review  :person="review.person" :review-text="review.reviewText" :image="review.image" :stars="review.stars" v-if="review.active.value"/>

    </template>

      <div class="controls">
        <div :class="review1Active ? 'active control' : 'control'" @click="toggleControl1();playback=false;console.log('Click')"/>
        <div :class="review2Active ? 'active control' : 'control'" @click="toggleControl2();playback=false;"/>
        <div :class="review3Active ? 'active control' : 'control'" @click="toggleControl3();playback=false;"/>
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
  margin-right: 2rem;
  margin-left: auto;
  position: relative;
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
  display: flex;
  padding-left: 2rem;
  width: 60%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}

.control.active{
  //border: 8px solid #4242e7;
  //animation: activate 0.5s forwards;
  transition: 0.5s linear all;
  background-color: #4242e7;
}

.control{
  background-color: white;
  border-radius: 100%;
  //border: 8px solid #a9a9a9;
  //border: 8px solid white;
  height: 3vw;
  width: 3vw;
  cursor: pointer;
  transition: 0.5s linear all;
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
.headline{
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

@keyframes activate {
  from{
    background-color: white;
  }
  to{
    background-color: #4242e7;
  }
}

</style>
