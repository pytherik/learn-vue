<script setup>

import Container from "@/components/Container.vue";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";
import Cards from "@/components/Cards.vue";
import LogInMessage from "@/components/LogInMessage.vue";

const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);

</script>

<template>
  <Container>
    <div v-if="!loadingUser">
      <Cards v-if="user" :user="user"/>
      <LogInMessage v-else/>
    </div>
      <div class="spinner" v-else>
        <a-spin/>
      </div>
  </Container>
</template>

<style scoped>

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

</style>