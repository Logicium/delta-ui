<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="messageBar">
    <div class="message">{{"Voted best Thrift Store of Raton 2K25"}}</div>
  </div>

  <div class="wrapper">
    <div class="navbar">

      <div class="title">DELTA THRIFT</div>

      <div class="navItems">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div class="button">ORDER NOW</div>
      </div>

    </div>
  </div>

  <RouterView />

</template>

<style scoped>

.title{
  font-size: 4vw;
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
  padding: 2rem;
}

.messageBar{
  display: flex;
  justify-content: center;
  background-color: #4242e7;
  color: white;
}

</style>
