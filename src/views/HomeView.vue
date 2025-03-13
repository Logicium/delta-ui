<script setup lang="ts">


import StarIcon from "@/assets/icons/StarIcon.vue";
import Panel from "@/components/Panel.vue";
import data from "@/data/data.ts";
import Map from "@/components/Map.vue";
import Review from "@/components/Review.vue";
import {ref} from "vue";
import Icon from "@/components/Icon.vue";
import EmailIcon from "@/assets/icons/EmailIcon.vue";
import MessengerIcon from "@/assets/icons/MessengerIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";

const review1Active = ref(true);
const review2Active = ref(false);
const review3Active = ref(false);

const playback = ref(true);

data.reviews[0].active = review1Active;
data.reviews[1].active = review2Active;
data.reviews[2].active = review3Active;

const loopReviews = function(){
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

const showGallery = ref(false);

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
        <div :class="review1Active ? 'active control' : 'control'" @click="toggleControl1();playback=false;"/>
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

    <div class="gallery" v-if="showGallery">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
    </div>

    <div class="galleryBtn button" @click="showGallery=!showGallery">{{showGallery ? "HIDE GALLERY" : "VIEW GALLERY"}}</div>

  </Panel>

  <Panel title="LOCATION" :subtitle="data.about2" color="#4242e7" text-color="white">

    <div class="map">
      <Map/>
    </div>

  </Panel>

  <Panel title="CONTACT US" :subtitle="data.contact1">
<!--    <div class="contactArea">-->
<!--      <input type="text" placeholder="Name">-->
<!--      <input type="text" placeholder="Email">-->
<!--      <textarea placeholder="Enter your message"></textarea>-->
<!--      <div class="contactBtn button-rev">SEND MESSAGE</div>-->
<!--    </div>-->
  <div class="gridWrap">

    <div class="contactGrid">
      <div class="area">
        <Icon><MessengerIcon/></Icon>
        <div>@deltathriftco</div>
        <div class="button-rev cta">SEND MESSAGE</div>
      </div>
      <div class="area">
        <Icon><PhoneIcon/></Icon>
        <div class="line1">+1 575-256-1024</div>
        <div class="button-rev cta">CALL US</div>
      </div>
      <div class="area">
        <Icon><EmailIcon/></Icon>
        <div class="line1">sales@deltathrift.co</div>
        <div class="button-rev cta">SEND EMAIL</div>
      </div>
    </div>

  </div>


  </Panel>

</div>


</template>


<style scoped>

.info{
  text-align: center;
  display: flex;
  width: calc(100% - 4rem);
  flex-direction: column;
}


.line1{
  margin: 1rem;
}

.line2{
  margin-top: 1vw;
  border-top: 2px solid white;
  padding-top: 1vw;
}

.area{
  color: white;
  align-items: center;
  padding-top: 2rem;
  background-color: #4242e7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gridWrap{
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contactGrid{
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;

}

input,textarea{
  margin: 1vw;
  background-color: #4242e7;
  border: none;
  box-shadow: none;
  border-bottom: 2px solid white;
  color: white;
  font-size: 15px;
  font-family: inherit;
  box-sizing: border-box;
  padding-bottom: 4px;
  transition: 0.25s linear all;
}
textarea{
  height: 30%;
}

input::placeholder,textarea::placeholder{
  color: #f2f2f2;
}

input:focus, textarea:focus{
  outline: none;
  border-bottom: 4px solid white;
  padding-bottom: 2px;
  transition: 0.25s linear all;
}

.contactBtn{
  align-self: center;
}

.contactArea{
  padding: 2rem 2rem 0 2rem;
  background-color: #4242e7;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.galleryBtn{
  margin-top: auto;
}

.map{
  padding-bottom: 2rem;
  padding-top: 2rem;
  width: 60%;
  height: 100%;
  display: flex;
  flex-grow: 1;
}

.gallery{
  animation: 1s fade-in forwards;
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 100% 100%;
  flex-grow: 1;
}

.imageArea{
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 100%;
  flex-grow: 1;
}

.reviews{
  width: 40%;
  margin-right: 2rem;
  margin-left: auto;
  position: relative;
  align-self: center;
}

.img1,.img2,.img3{
  display: flex;
  flex-direction: column;
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
  transition: 0.5s linear all;
  background-color: #4242e7;
}

.control{
  background-color: white;
  border-radius: 100%;
  height: 3vw;
  width: 3vw;
  cursor: pointer;
  transition: 0.5s linear all;
}

.bannerInfo{
  background-color: #4242e7;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  padding-left: 2rem;
  padding-right: 2rem;
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

.button{
  width: fit-content;
  cursor: pointer;
  border-radius:4px;
  padding: 1vw;
  background-color: #4242e7;
  color: white;
}

.cta{
  margin-top: 0;
}

.banner{
  position: relative;
  display: flex;
  min-height: 60vh;
  padding-bottom: 2rem;
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

@keyframes fade-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}



@media only screen and (max-width: 760px) {
  .banner{
    flex-direction: column;
  }

  .bannerInfo{
    animation: 1s fade-in forwards;
    width: 60%;
  }

  .reviews{
    animation: 1s fade-in forwards;
    width: 60%;
    margin-left: 2rem;
  }

  .imageArea{
    animation: 1s fade-in forwards;
    width:60%;
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 20vh 20vh;
  }

  .contactGrid{
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
}

</style>
