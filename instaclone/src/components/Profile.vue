<script setup>

import { onMounted, reactive, ref } from "vue";
import Container from "@/components/Container.vue";
import Userbar from "@/components/Userbar.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { useRoute } from "vue-router";
import { supabase } from "@/supabase";
import { useApiStore } from "@/stores/api";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";

const api = useApiStore();

const route = useRoute();
const { username } = route.params;

const userStore = useUserStore();
const { user: userLoggedIn } = storeToRefs(userStore);

const user = ref(null);
const posts = ref([]);
const isFollowed = ref(false);

const userInfo = reactive({
  posts: 0,
  followers: 0,
  following: 0
})

const loading = ref(false);

const addNewPost = (post) => {
  posts.value.unshift(post);
}

const fetchFromApi = async () => {
  loading.value = true;
  user.value = await api.getUserByUsername(username);
  if (!user.value) {
    loading.value = false;
    return null;
  }
  posts.value = await api.getPostsByOwnerId(user.value.id);

  userInfo.posts = posts.value.length;

  const isFollowing = await api.getAllFollowedByUser(user.value.id);
  if (isFollowing) userInfo.following = isFollowing.length;

  const hasFollowers = await api.getAllFollowersForUser(user.value.id);
  if (hasFollowers) userInfo.followers = hasFollowers.length;

  isFollowed.value = await api.getIsAlreadyFollowedBy(userLoggedIn.value.id, user.value.id);

  loading.value = false;
}

onMounted(() => {
  fetchFromApi();
})

</script>

<template>
  <Container>
    <div class="profile-container" v-if="!loading">
      <Userbar :key="$route.params"
               :user="user"
               :addNewPost="addNewPost"
               :isFollowed="isFollowed"
               :userInfo="userInfo"/>
      <ImageGallery :posts="posts" />
    </div>
    <div class="spinner" v-else>
      <a-spin />
    </div>
  </Container>
</template>

<style scoped>

.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

</style>
