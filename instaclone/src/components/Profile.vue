<script setup>

import { onMounted, ref } from "vue";
import Container from "@/components/Container.vue";
import Userbar from "@/components/Userbar.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { useRoute } from "vue-router";
import { useApiStore } from "@/stores/api";

const route = useRoute();
const { username } = route.params;
const user = ref(null);

const posts = ref([]);

const addNewPost = (post) => {
  posts.value.unshift(post);
}

const api = useApiStore();

const fetchFromApi = async () => {
  user.value = await api.getUserByUsername(username);
  posts.value = await api.getPostsByOwnerId(user.value.id);
}

onMounted(() => {
  fetchFromApi();
})

</script>

<template>
  <Container>
    <div class="profile-container">
      <Userbar :key="$route.params"
               username="erik berndt"
               :user="user"
               :addNewPost="addNewPost"
               :userInfo="{
        posts: 4,
        followers: 3,
        following: 2134
      }"/>
      <ImageGallery :posts="posts" />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  /*background: #5F9EA033;*/
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  padding: 20px 0;
}
</style>
