<script setup>

const { posts } = defineProps(['posts'])

</script>

<template>
  <div class="image-gallery-container">
    <img v-for="post in posts" :key="posts.id" :src="post.image" :alt="post.id">
  </div>
</template>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

img{
  margin: 5px;
  width: 200px;
}
</style>