<script setup>
//info examples pinia-store, prop-drilling

import GrandChild from "@/components/GrandChild.vue";
import {inject, toRefs} from "vue";
import {useNamesStore} from "@/stores/names";

const mynames = useNamesStore();
mynames.addMyName('Hello');
console.log(mynames.names);
const props = defineProps(['numbers'])
const {numbers} = toRefs(props);

const names = inject("names");
console.log(names.value[0]);

const providedNumbers = inject("providedNumbers");
console.log(providedNumbers.value);

const addName = (name) => {
  names.value.push(name);
  console.log(names.value);
}

</script>

<template>
<div>
  <h1>{{ numbers[1] }} {{ mynames.names.pop() }} Child</h1>
  <div class="line"></div>
  <button @click="addName('Heidi')">add name</button>
  <GrandChild :numbers="numbers"/>
</div>
</template>

<style scoped>

</style>