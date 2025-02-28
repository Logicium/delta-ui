<script setup lang="ts">

import InstaIcon from "@/assets/InstaIcon.vue";
import FacebookIcon from "@/assets/FacebookIcon.vue";
import ShareIcon from "@/assets/ShareIcon.vue";
</script>

<template>

  <div class="footer">

    <div class="info">
      <div>256 First Street, Raton, NM 87740</div>
      <div>+1 575-256-1024</div>
      <div>sales@deltathrift.co</div>
    </div>
    <div class="phone"></div>
    <div class="icons">
      <div class="icon"><InstaIcon/></div>
      <div class="icon"><FacebookIcon/></div>
      <div class="icon"><ShareIcon/></div>
    </div>
    <div class="disclosure">
      <div>
        2025 Delta Thrift
      </div>
      <div>
        All rights reserved
      </div>
    </div>
  </div>


</template>

<style scoped>

.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 4vw;
  width: 4vw;
  border-radius: 100%;
  cursor: pointer;
}

.icon svg{
  color: #4242e7;
}

.footer{
  height: 30vh;
  background-color: #4242e7;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.disclosure{
  display: flex;
  justify-content: space-between;
  padding-top: 1vw;
  width: 100%;
  border-top: 2px solid white;
}

.icons{
  display: flex;
  width: 40%;
  justify-content: space-evenly;
}

.info{
  text-align: center;
}

svg{
  color: white;
}

</style>
