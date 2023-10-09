<script setup>
import QuestionHeader from "@/components/QuestionHeader.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quizes from "../data/data.json";
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);
// const questionStatus = ref(`${currentQuestionIndex.value + 1 }/${quiz.value.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value + 1}/${quiz.value.questions.length}`;
// })

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const percentage = computed(
  () => `${(100 / quiz.questions.length) * currentQuestionIndex.value}%`
);
// const resultStatus = computed(
//   () => `${numberOfCorrectAnswers.value}/${quiz.questions.length}`
// );

const onOptionSelected = (isCorrect) => {
  currentQuestionIndex.value++;
  showResults.value =
    currentQuestionIndex.value === quiz.questions.length && true;
  isCorrect && numberOfCorrectAnswers.value++;
};
</script>

<template>
  <div class="container">
    <QuestionHeader :questionStatus="questionStatus" :percentage="percentage" />
    <QuestionCard
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
    />
    <!--    <QuizResult v-else :resultStatus="resultStatus" />-->
    <QuizResult
      v-else
      :numberOfQuestions="quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
  </div>
</template>

<style scoped></style>
