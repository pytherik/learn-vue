<script setup>
const { VITE_BASE_PHOTO_URL } = import.meta.env;
import { useRouter } from "vue-router";

const {post} = defineProps(['post']);
const router = useRouter();
const showUserProfile = (username) => {
  router.push(`/profile/${username}`);
}

</script>

<template>
  <a-card class="card" hoverable style="width: 240px">
    <template #cover>
      <img alt="example" :src="`${VITE_BASE_PHOTO_URL}${post.url}`" />
    </template>
    <a-card-meta :title="post.users.username"
                 @click="showUserProfile(post.users.username)">
      <template #description>{{post.caption}}</template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>