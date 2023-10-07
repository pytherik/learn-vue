<script setup>
import carsData from '../data/cars.json';
import {ref} from "vue";
import CarCard from "@/components/CarCard.vue";

const cars = ref(carsData)

</script>

<template>
  <div class="container">
    <div>
      <h1>Home View</h1>
    </div>
    <div class="car-list">
      <CarCard v-for="car in cars" :key="car.id" :car="car"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.car-list {
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>