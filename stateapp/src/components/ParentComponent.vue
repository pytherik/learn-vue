<script setup>

import ChildComponent from "@/components/ChildComponent.vue";
import {defineProps} from "vue";
import useNames from "@/composables/useNames";

const props = defineProps(['numbers'])
const {numbers} = props
const {moreNames, addName} = useNames();

addName('Franzi');
</script>

<template>
<div>
  <h1>{{ numbers[0] }} {{ moreNames.pop() }} Parent</h1>
  <div class="line"></div>
    <ChildComponent :numbers="numbers"/>
</div>
</template>

<style scoped>

</style>