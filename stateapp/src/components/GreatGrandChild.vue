<script setup>
import {defineProps, inject, toRefs} from "vue";

const props = defineProps(['numbers'])
const {numbers} = toRefs(props);

const names = inject("names"); //info provided in App.vue


const addName = (name) => {
  names.value.push(name);
  console.log(names.value);
}
</script>

<template>
  <div>
    <h1>{{ names.pop() }} Great Grand Child</h1>
    <div class="line"></div>
    <button @click="addName('Lola')">add name</button>
  </div>
</template>

<style scoped>

</style>