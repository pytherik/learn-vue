<script setup>
import { ref } from "vue";

const showGreet = ref(true);
</script>

<template>
  <main>
    <div class="container">
      <Transition name="fade">
        <h1 v-if="showGreet">Nicki</h1>
        <h1 v-else>Petra</h1>
      </Transition>
    </div>
    <button @click="showGreet = !showGreet">Toggle</button>
  </main>
</template>

<style scoped>
.container {
  position: relative;
}

h1 {
  font-size: 3rem;
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  margin-top: 180px;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 5s ease;
}
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 5s ease;
}
</style>
