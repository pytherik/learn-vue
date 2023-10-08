<script setup>

import {useRoute} from "vue-router";
import q from "../data/data.json";
import {reactive, ref, watch} from "vue";
import QuestionCard from "@/components/QuestionCard.vue";
import QuestionHeader from "@/components/QuestionHeader.vue";

const route = useRoute();
const id = parseInt(route.params.id);
const currentQuestionIndex = ref(0);
const quiz = ref(q[id - 1]);

const question = reactive({
  status:`${currentQuestionIndex.value + 1}/${quiz.value.questions.length}`,
  current: quiz.value.questions[currentQuestionIndex.value],
})

watch(() => currentQuestionIndex.value, () => {
  question.status = `${currentQuestionIndex.value + 1}/${quiz.value.questions.length}`;
  question.current = quiz.value.questions[currentQuestionIndex.value];
})
</script>

<template>
  <div class="container">
    <QuestionHeader :questionStatus="question.status"/>
    <QuestionCard :question="question.current"/>
    <button @click="currentQuestionIndex++">next question</button>
    {{ currentQuestionIndex }}
    {{ question.current }}
    {{ question.status }}
  </div>
</template>

<style scoped>

</style>
