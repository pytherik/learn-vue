<script setup>

import { onMounted, ref } from "vue";
import Container from "@/components/Container.vue";
import Userbar from "@/components/Userbar.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { useRoute } from "vue-router";
import { supabase } from "@/supabase";
// import { useApiStore } from "@/stores/api";

// const api = useApiStore();

// const fetchFromApi = async () => {
//   user.value = await api.getUserByUsername(username);
//   posts.value = await api.getPostsByOwnerId(user.value.id);
// }

const route = useRoute();
const { username } = route.params;
const user = ref(null);

const posts = ref([]);


const addNewPost = (post) => {
  posts.value.unshift(post);
}
const fetchUserData = async () => {
  try {
    const { data: userData } = await supabase
        .from("users")
        .select()
        .eq("username", username)
        .single()
    user.value = userData;
    console.log(user.value);
  } catch (error) {
    return console.log(error);
  }
  
  try {
    const { data: postsData } = await supabase
        .from("posts")
        .select()
        .eq("owner_id", user.value.id)
    posts.value = postsData;
    console.log(posts.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  // fetchFromApi();
  fetchUserData();  
})
console.log(user.value);

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
