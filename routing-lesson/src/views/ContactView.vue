<script setup>
import cars from '../data/cars.json';
import {useRoute} from 'vue-router';

const route = useRoute();
const car = cars[Number(route.params.id - 1)];
</script>

<template>
  <div>
    <h4>Händler: {{ car.contact.dealer }}</h4>
    <h4>Telefon: {{ car.contact.phone }}</h4>
  </div>
</template>

<style scoped>

</style>