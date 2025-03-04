<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import data from "./data/data.ts";
import Footer from "@/components/Footer.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
</script>

<template>

  <div class="messageBar">
    <div class="message">{{data.message}}</div>
  </div>

  <div class="wrapper">
    <div class="navbar">

      <div class="title">
        <div class="logo"></div>
        <div class="titleText">DELTA THRIFT</div>
      </div>

      <div class="navItems">
        <RouterLink class="navItem" to="/">Home</RouterLink>
        <RouterLink class="navItem" to="/about">About</RouterLink>
        <div class="button mobileMenu"><MenuIcon/></div>
        <div class="button">ORDER NOW</div>
      </div>

    </div>
  </div>

  <RouterView />

  <Footer/>


</template>

<style scoped>

.mobileMenu{
  display: none;
  margin-left: auto;
  margin-right: 1vw;
}

.mobileMenu svg{
  color: white;
}

.logo{
  height: 4vw;
  width: 4vw;
  border-radius: 100%;
  background-color: #4242e7;
  margin-right: 1vw;
}

.title{
  display: flex;
  align-items: center;
  vertical-align: middle;
}

.titleText{
  white-space: break-spaces;
  line-height: 5vw;
  font-size: 4vw;
  border-left: 0.3vw solid black;
  padding-left: 1vw;
}

.navItems{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

.button{
  cursor: pointer;
  border-radius:4px;
  padding: 1vw;
  background-color: #4242e7;
  color: white;
}

.navbar{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
}

.messageBar{
  display: flex;
  justify-content: center;
  background-color: #4242e7;
  color: white;
}

@media only screen and (max-width: 760px) {
  .mobileMenu{
    display: flex;
  }

  .navItem{
    display: none;
  }
}

</style>
