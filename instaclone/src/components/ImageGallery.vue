<script setup>

const { posts } = defineProps(['posts'])
const { VITE_BASE_PHOTO_URL } = import.meta.env;
</script>

<template>
  <div class="image-gallery-container">
    <div class="card" v-for="post in posts">
    <img :key="posts.id"
         :src="`${VITE_BASE_PHOTO_URL}${post.url}`"
         :alt="post.id">
    <span>{{ post.caption }}</span>
    </div>
  </div>
</template>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;

}

img{
  margin: 5px;
  width: 200px;
}

</style>