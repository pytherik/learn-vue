<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps(['searchResult'])
const {searchResult} = toRefs(props);
</script>

<template>
  <NCard :title="searchResult.Title">
    <template #cover>
      <img :src="searchResult.Poster" alt="rand">
    </template>
      <h3>{{ searchResult.Year }}</h3>
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