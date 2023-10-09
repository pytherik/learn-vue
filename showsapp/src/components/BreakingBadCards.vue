<script setup>
import axios from "axios";
import {KEY} from "../../config";
import {ref, watch} from "vue";
import MovieCard from "@/components/MovieCard.vue";

const searchKeyword = ref("petra");
const searchResults = ref(null);
const totalResults = ref(0);
const page = ref(1);


let response = await axios.get(`https://www.omdbapi.com/?apikey=${KEY.key}&s=${searchKeyword.value}&page=${page.value}`)

watch(page, async () => {
  page.value = (totalResults.value - page.value * 10 <= -10) ? page.value - 1: page.value < 1 ? page.value +1: page.value;
  response = await axios.get(`https://www.omdbapi.com/?apikey=${KEY.key}&s=${searchKeyword.value}&page=${page.value}`)
  searchResults.value = response.data.Search;
  totalResults.value = response.data.totalResults;
  console.log(searchResults.value);
})

searchResults.value = response.data.Search;
totalResults.value = response.data.totalResults;
</script>

<template>
  <div class="container">
    <div class="cards">
      <!--     <MovieCard :searchResults="searchResults"/>-->
      <MovieCard v-for="searchResult in searchResults"
                 :key="searchResult.imdbID"
                 :searchResult="searchResult"/>
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
  padding: 30px
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 700px
}

.cards h3 {
  font-weight: bold;
}

.cards p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
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