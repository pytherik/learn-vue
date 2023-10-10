<script setup>

import {onMounted, ref, watch} from "vue";
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";

const characters = ref(null);
const page = ref(1);

onMounted(async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
  characters.value = res.data.results;
  console.log(characters.value);
})

watch(page, async() => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`)
  characters.value = res.data.results;
} )
</script>

<template>
  <div class="container">
    <div v-if="characters" class="cards">
      <MovieCard v-for="character in characters"
                 :key="character.id"
                 :title="character.name"
                 :image="character.image">
        <div>
        <h3>{{ character.location.name }}</h3>
        </div>
      </MovieCard>
    </div>
    <div v-else class="cards spinner">
      <NSpin size="large"/>
    </div>
    <div class="button-container">
      <button @click="page--">&lt;</button>
      <button @click="page++">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
  margin-top: 100px;
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.cards h3 {
  font-weight: bold;
}

.cards p {
  font-size: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 30px
}

.button-container button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>