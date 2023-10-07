<script setup>

import {useRoute} from "vue-router";
import q from "../data/data.json";
import {ref} from "vue";

const route = useRoute();
const qId = route.params.id;
const questions = ref(q[qId - 1])
console.log(qId);
</script>

<template>
<div>
  <header>
    <h4>Question 1/3</h4>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </header>
</div>
</template>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}
</style>