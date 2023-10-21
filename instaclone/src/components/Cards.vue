<script setup>

import Card from "@/components/Card.vue";
import { useApiStore } from "@/stores/api";
import { onMounted, ref } from "vue";
import { supabase } from "@/supabase";
import Observer from "@/components/Observer.vue";

const { user } = defineProps(["user"]);
const ownerIds = ref([]);
const api = useApiStore();

const posts = ref([]);
const lastCardIndex = ref(2);
const endOfPosts = ref(false);

const fetchData = async () => {
  const res = await api.getAllFollowedByUser(user.id);

  ownerIds.value = res.map(postArr => postArr.following_id)

  const { data } = await supabase
      .from("posts")
      .select(`
      created_at,
      url,
      caption,
      users(username)
      `)
      .in("owner_id", ownerIds.value)
      .range(0, lastCardIndex.value)
      .order("created_at", { ascending: false })
  posts.value = data;

  // for (const postArrayId in res) {
  //   const data = await api.getPostsByOwnerId(res[postArrayId].following_id);
  //   for (const postId in data) {
  //     // posts.value.push(data[postId]);
  //   }
  // }
}

const fetchNextSet = async () => {
  if(endOfPosts.value) return;
  const { data } = await supabase
      .from("posts")
      .select(`
      created_at,
      url,
      caption,
      users(username)
      `)
      .in("owner_id", ownerIds.value)
      .range(lastCardIndex.value + 1, lastCardIndex.value += 3)
      .order("created_at", { ascending: false })
  posts.value = [...posts.value, ...data];
  if (!data.length) return endOfPosts.value = true;
}

onMounted(() => {
  fetchData();
})
</script>

<template>
  <div class="timeline-container">
    <Card v-for="post in posts"
          :key="post.id"
          :post="post"/>
    <Observer v-if="posts.length" @intersect="fetchNextSet"/>
  </div>
</template>

<style scoped>

.timeline-container {
  background: #5F9EA011;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

</style>