<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps(["quiz"]);
const quiz = ref(props.quiz);
const router = useRouter();
const navigateToQuiz = () => {
  router.push(`/questions/${quiz.value.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToQuiz()">
    <img :src="quiz.img" :alt="quiz.name" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card {
  width: 310px;
  overflow: hidden;
  border: none;
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
