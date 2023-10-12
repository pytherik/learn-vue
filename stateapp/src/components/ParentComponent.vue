<script setup>
//info example composables, prop-drilling
import ChildComponent from "@/components/ChildComponent.vue";
import {provide, ref, toRefs} from "vue";
import useNames from "@/composables/useNames";

const props = defineProps(['numbers']);
const {numbers} = toRefs(props);

const {moreNames, addName} = useNames();
addName('Franzi');

const providedNumbers =ref([42, 23, 666]);
provide("providedNumbers", providedNumbers);


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