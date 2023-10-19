<script setup>

const { posts } = defineProps(['posts'])
const baseUrl = 'https://sgpmbbhdxeelsvlojhsc.supabase.co/storage/v1/object/public/images/'

</script>

<template>
  <div class="image-gallery-container">
    <div class="card" v-for="post in posts">
    <img :key="posts.id"
         :src="`${baseUrl}${post.url}`"
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