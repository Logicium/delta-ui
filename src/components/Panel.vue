<script setup lang="ts">
defineProps(["id",'color','textColor','title','subtitle']);
</script>

<template>

  <div class="panel">
    <div class="title">{{title}}</div>
    <div class="subtitle">{{subtitle}}</div>
    <slot/>
  </div>

</template>

<style scoped>

.panel{
  min-height: 70vh;
  background-color: v-bind(color);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: v-bind(textColor);
  padding-bottom: 2rem;
  flex-grow: 1;
}

.title{
  font-size: 4vw;
  text-align: center;
  padding: 2rem;
}

.subtitle{
  width: 60%;
  text-align: center;
  padding-bottom: 2rem;
}

</style>
