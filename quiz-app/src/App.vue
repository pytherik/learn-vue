<script setup>
import q from "./data/data.json";
import { ref } from "vue";

const quizes = ref(q);
const search = ref("");
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Suchen..." />
    </header>
    <div class="options-container">
      <div class="card" v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img" :alt="quiz.name" />
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

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

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px #00000033;
  margin-right: 10px;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
