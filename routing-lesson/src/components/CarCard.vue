<script setup>
import {defineProps, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const props = defineProps(['car']);
const car = ref(props.car)
console.log(router);
</script>

<template>
  <router-link :to="`/car_details/${car.id}`">
    <div class="card">
      <h1>{{ car.name }}</h1>
      <img :src="car.image" :alt="car.name">
      <div class="description">
        <span>Preis: {{ car.price }}</span>
        <span>Baujahr: {{ car.year }}</span>
      </div>
        <router-link :to="`/car_details/${car.id}/contact`"><button>*contact*</button></router-link>
    </div>
    <RouterView/>
  </router-link>
<!--alt      <button @click="router.push(`/car_details/${car.id}/contact`)">*contact*</button>-->
</template>

<style scoped>
h1 {
  border-bottom: 2px solid #444;
}

.card {
  padding: 5px;
  margin: 10px;
  width: 250px;
  height: 290px;
  background: #bbb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 4px 3px 10px #00000066;
}

.card img {
  width: 100%;
}

button {
  width: 100%;
}

.description {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #444;
}

.card span {
  padding: 10px;
}
</style>