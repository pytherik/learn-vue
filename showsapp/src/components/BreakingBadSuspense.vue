<script setup>

import BreakingBadCards from "@/components/BreakingBadCards.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <BreakingBadCards/>
    </template>
    <template #fallback>
      <div class="cards">
        <NSpin size="large"/>
      </div>
    </template>
  </Suspense>

</template>

<style scoped>
.cards {
  height: 700px;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>