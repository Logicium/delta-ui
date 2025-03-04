<script setup lang="ts">

</script>

<template>
<div class="icon">
  <slot/>
</div>
</template>

<style scoped>

.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: calc(15px + 3vw);
  width: calc(15px + 3vw);
  border-radius: 100%;
  cursor: pointer;
}

.icon svg{
  color: #4242e7;
}


</style>
