<script setup>
import QuestionHeader from "@/components/QuestionHeader.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import {useRoute} from "vue-router"
import {ref, computed} from "vue";
import quizes from "../data/data.json"

const route = useRoute()
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0);

// const questionStatus = ref(`${currentQuestionIndex.value + 1 }/${quiz.value.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value + 1}/${quiz.value.questions.length}`;
// })

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

</script>

<template>
  <div class="container">
    <QuestionHeader :questionStatus="questionStatus"/>
    <QuestionCard :question="quiz.questions[currentQuestionIndex]"/>
    <button @click="currentQuestionIndex++">next question</button>
    {{ currentQuestionIndex }}
    {{ quiz.questions[currentQuestionIndex] }}
    {{ questionStatus }}
  </div>
</template>

<style scoped>

</style>
