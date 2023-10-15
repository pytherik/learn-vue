<script setup>
import Container from "@/components/Container.vue";
import Userbar from "@/components/Userbar.vue";
import ImageGallery from "@/components/ImageGallery.vue";
</script>

<template>
  <Container>
    <div class="profile-container">
      <Userbar username="erik berndt"
               :userInfo="{
        posts: 4,
        followers: 3,
        following: 2134
      }"/>
      <ImageGallery :posts="[
          {
        id: 1,
        image: 'https://th.bing.com/th/id/OIP.h1DYp1pmZO-3RTRhXITnaAHaHa?pid=ImgDet&rs=1',
      },
      ]"/>
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
