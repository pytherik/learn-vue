<script setup>
import cars from '../data/cars.json';
import {useRoute, useRouter} from 'vue-router';
import CarCard from "@/components/CarCard.vue";

// import PageNotFoundView from "@/views/PageNotFoundView.vue";
const router = useRouter()
const route = useRoute();
const carId = Number(route.params.id - 1);
const car = cars[carId];
const handleInvalidId = () => router.push('/page-not-found')
</script>


<template>
  <div v-if="car !== undefined" class="container">
    <h1>Details</h1>
    <CarCard :car="car"/>
  </div>
  <div v-else>
    {{ handleInvalidId() }}
  </div>
</template>

<style scoped>
h1 {
  margin: 4rem 0;
}
</style>