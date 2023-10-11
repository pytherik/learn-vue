<script setup>

import GreatGrandChild from "@/components/GreatGrandChild.vue";
import {defineProps, inject} from "vue";

const props = defineProps(['numbers'])
const {numbers} = props

const names = inject("names");

</script>

<template>
  <div>
    <h1>{{ names[2]}} Grand Child</h1>
    <div class="line"></div>
    <GreatGrandChild  :numbers="numbers"/>
  </div>
</template>

<style scoped>

</style>