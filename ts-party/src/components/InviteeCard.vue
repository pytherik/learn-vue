<script setup lang="ts">
// import {inject} from "vue";
//
// const invitees = inject("invitees");

import {type Invitee, STATUS} from "@/types";

defineProps<{ invitee: Invitee }>()

</script>

<template>
  <div class="card" :style="{backgroundColor: invitee.status < 1 ? 'lightgreen': invitee.status < 2 ? 'sandybrown': 'hotpink'}">
    {{ invitee.name }}
  </div>
</template>

<style scoped>

.card {
  padding: 5px;
  border-radius: 3px;
  margin: 2px 0;
  border: 1px solid #888;
}
</style>