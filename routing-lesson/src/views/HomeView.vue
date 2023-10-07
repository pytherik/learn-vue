<script setup>
import carsData from '../data/cars.json';
import {ref} from "vue";

const cars = ref(carsData)

</script>

<template>
  <div class="container">
    <div>
      <h1>Home View</h1>
    </div>
    <div class="car-list">
      <RouterLink :to="`car_details/${car.id}`" v-for="car in cars" :key="car.id" :car="car">
          {{ car.name }}
        </RouterLink>
    </div>
  </div>
</template>

<style scoped>


.car-list {
  font-size: 3rem;
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.link {
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #333;
}

.link:hover {
  background: #00aaff;
}

a {
  color: blue;
}
</style>