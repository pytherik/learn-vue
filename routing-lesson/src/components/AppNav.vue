<script setup>
import {ref} from "vue";
import {RouterLink} from "vue-router";

const clickMe = ref(false);
const handleClick = () => clickMe.value = !clickMe.value;
</script>

<template>
<div>
  <button @click="handleClick">hier gehts zur Petra</button>
  <RouterLink active-class="active" to="/" >Home</RouterLink>
  <RouterLink active-class="active" to="/about" >About</RouterLink>
  <RouterLink active-class="active" to="/all_cars" >All Cars</RouterLink>
  <span v-if="clickMe">
  <RouterLink active-class="active" to="/petra">Petra</RouterLink>
  </span>
</div>
</template>

<style scoped>
a {
  color: #dedeed;
  text-decoration: none;
  margin-right: 20px;
}
button {
  margin-right: 20px;
}
.active {
  font-weight: bold;
  color: lightblue;
}
</style>