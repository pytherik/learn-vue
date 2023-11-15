<script setup lang="ts">
import { vAutofocus } from '@/directives/vAutofocus'
import { nextTick, ref } from 'vue'
import { useCounter } from '@/use/useCounter'

const posts = ref([
  {
    id: 1,
    author: 'Erik',
    body: 'Hallo ihr Deppen'
  },
  {
    id: 2,
    author: 'Hansi',
    body: 'Selber Deppen'
  },
  {
    id: 3,
    author: 'Petra',
    body: 'Gehts noch, ihr Deppen'
  },
  {
    id: 4,
    author: 'Erik',
    body: 'Hör auf zu deppen'
  },
  {
    id: 5,
    author: 'Erik',
    body: 'Keiner mehr hier?'
  }
])

const { countData, increaseCounter, oddOrEven } = useCounter()

nextTick(() => {
  increaseCounter(1)
})
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts">
        <RouterLink :to="`/postdetails/${post.id}`" :key="post.id">Post {{ post.id }}</RouterLink>
      </li>
    </ul>
    <textarea cols="20" rows="4" v-autofocus /><br />
    <span @click="increaseCounter(1)" :class="{ red: oddOrEven === 'ungerade' }"
      >Klick mich {{ countData.count }}</span
    >
  </div>
</template>

<style scoped>
ul {
  margin-top: 2rem;
}

textarea {
  margin-top: 2rem;
}

span {
  cursor: pointer;
  color: lightgreen;
}
.red {
  color: hotpink;
}
</style>
