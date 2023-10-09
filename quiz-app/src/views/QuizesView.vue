<script setup>
import q from "../data/data.json";
import { ref, watch } from "vue";
import QuizCard from "@/components/QuizCard.vue";
import gsap from "gsap";
let quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(-100px)";
};
const enter = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    delay: 0.3 * el.dataset.idx,
  });
};
const afterEnter = () => {
  console.log("after enter");
};
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Suchen..." />
    </header>
    <div class="options-container">
      <TransitionGroup
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <QuizCard
          v-for="(quiz, idx) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-idx="idx"
        />
      </TransitionGroup>
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
