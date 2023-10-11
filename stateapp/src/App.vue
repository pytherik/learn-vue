<script setup>

import ParentComponent from "@/components/ParentComponent.vue";
import {provide, ref} from "vue";

const numbers = ref([1,2,3,4,5,6,7,8,9])
const names = ref(['Erik', 'Hansi', 'Petra', 'Nicki']);
provide("names", names);


</script>

<template>
  <main>
    <ParentComponent :numbers="numbers"/>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(55, 123, 234);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
