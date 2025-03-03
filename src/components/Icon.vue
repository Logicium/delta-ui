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
  height: 4vw;
  width: 4vw;
  border-radius: 100%;
  cursor: pointer;
}

.icon svg{
  color: #4242e7;
}


</style>
