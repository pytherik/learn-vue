<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps(['title', 'image'])
const {title, image} = toRefs(props);
</script>

<template>
  <NCard :title="title">
    <template #cover>
      <img :src="image" alt="rand">
    </template>
    <slot></slot>
  </NCard>
</template>

<style scoped>
.n-card {
  width: 200px;
  margin:10px 20px;
  height: 300px;

}
.n-card img {
  height: 250px
}

p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
}
</style>