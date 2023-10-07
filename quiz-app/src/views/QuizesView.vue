<script setup>
import q from "../data/data.json";
import { ref, watch } from "vue";
import QuizCard from "@/components/QuizCard.vue";

let quizes = ref(q);
const search = ref("");

watch(search, () => {
    quizes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Suchen..." />
    </header>
    <div class="options-container">
      <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>

header {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>
