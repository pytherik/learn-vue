<script setup>
import BreakingBadCards from "@/components/BreakingBadCards.vue";
import RickMortyCards from "@/components/RickMortyCards.vue";
import HeroHeader from "@/components/HeroHeader.vue";
import {ref} from "vue";
import BreakingBadSuspense from "@/components/BreakingBadSuspense.vue";

const isMovies = ref(true);
</script>

<template>
  <main>
    <HeroHeader :isMovies="isMovies"
                @selectShow="isMovies=!isMovies"/>
    <!--    <BreakingBadSuspense v-if="isMovies"/>-->
    <!--    <RickMortyCards v-else/>-->
    <KeepAlive>
      <Component :is="isMovies ? BreakingBadSuspense : RickMortyCards"/>
    </KeepAlive>
  </main>
</template>

<style scoped>

</style>