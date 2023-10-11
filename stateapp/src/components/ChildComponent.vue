<script setup>

import GrandChild from "@/components/GrandChild.vue";
import {defineProps, inject} from "vue";

const props = defineProps(['numbers'])
const {numbers} = props
const names = inject("names");
import {useNamesStore} from "@/stores/names";

const {storeNames} = useNamesStore();
console.log(storeNames);
const addName = (name) => {
  names.value.push(name);
  console.log(names.value);
}

</script>

<template>
<div>
  <h1>{{ numbers[1] }} {{ storeNames }} Child</h1>
  <div class="line"></div>
  <button @click="addName('Heidi')">add name</button>
  <GrandChild :numbers="numbers"/>
</div>
</template>

<style scoped>

</style>