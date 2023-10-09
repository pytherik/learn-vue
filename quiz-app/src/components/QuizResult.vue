<script setup>
import { defineProps, toRefs } from "vue";

// const props = defineProps(["resultStatus"]);
// const { resultStatus } = toRefs(props);
const props = defineProps(["numberOfQuestions", "numberOfCorrectAnswers"]);
const { numberOfQuestions, numberOfCorrectAnswers } = toRefs(props);
</script>

<template>
  <div class="results">
    <p>Dein Ergebnis...</p>
    <h1>{{ numberOfCorrectAnswers }}/{{ numberOfQuestions }}</h1>
    <RouterLink to="/">zurück zum Start</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
  font-weight: 200;
}
</style>
