<script setup>

import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";
import UploadPhotoModal from "@/components/UploadPhotoModal.vue";

const { username, userInfo, addNewPost } = defineProps(["username", "userInfo", "addNewPost"])

const route = useRoute();
const userStore = useUserStore();
const { username: profileUsername } = route.params;
const { user } = storeToRefs(userStore)

</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2">{{ user.username }}</a-typography-title>
      <UploadPhotoModal v-if="user && user.username === profileUsername"
                        :addNewPost="addNewPost" />
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5">Posts: {{ userInfo.posts }}</a-typography-title>
      <a-typography-title :level="5">Followers: {{ userInfo.followers }}</a-typography-title>
      <a-typography-title :level="5">Following: {{ userInfo.following }}</a-typography-title>
    </div>
  </div>
</template>

<style scoped>

.userbar-container {
  padding-bottom: 75px;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-content {
  display: flex;
  align-items: center;
}

.bottom-content h5 {
  padding: 0;
  margin: 0 30px 0 0;
}

</style>