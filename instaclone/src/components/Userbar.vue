<script setup>

import { useRoute } from "vue-router";
import UploadPhotoModal from "@/components/UploadPhotoModal.vue";
import { useUserStore } from "@/stores/users";
import {useApiStore} from "@/stores/api";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user: userLoggedIn } = storeToRefs(userStore);

const api = useApiStore()

const { user, userInfo, addNewPost, isFollowed } = defineProps(["user", "userInfo", "addNewPost", "isFollowed"])
const alreadyFollowed = ref(isFollowed);

const route = useRoute();
const { username: profileUsername } = route.params;

const handleFollow = async (followId) => {
  await api.setFollowing(userLoggedIn.value.id, followId);
  alreadyFollowed.value = true;
}

const handleUnFollow = async (followId) => {
  await api.quitFollowing(userLoggedIn.value.id, followId);
  alreadyFollowed.value = false;
}

</script>

<template>
  <div class="userbar-container" v-if="user">
    <div class="top-content">
      <a-typography-title :level="2">{{ user.username }}</a-typography-title>
      <div v-if="userLoggedIn">
        <UploadPhotoModal
            v-if="user && userLoggedIn.username === profileUsername"
            :addNewPost="addNewPost" />
        <a-button v-else-if="!alreadyFollowed" @click="handleFollow(user.id)">Follow</a-button>
        <a-button v-else @click="handleUnFollow(user.id)">is following</a-button>
      </div>
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5">Posts: {{ userInfo.posts }}</a-typography-title>
      <a-typography-title :level="5">Followers: {{ userInfo.followers }}</a-typography-title>
      <a-typography-title :level="5">Following: {{ userInfo.following }}</a-typography-title>
    </div>
  </div>
  <div class="userbar-container" v-else>
    <a-typography-title :level="2">User not found</a-typography-title>
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