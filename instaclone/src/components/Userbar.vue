<script setup>

const {username, userInfo} = defineProps(['username', 'userInfo'])
</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2">{{ username }}</a-typography-title>
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5">Posts: {{ userInfo.posts }}</a-typography-title>
      <a-typography-title :level="5">Followers: {{ userInfo.followers }}</a-typography-title>
      <a-typography-title :level="5">Following: {{ userInfo.following }}</a-typography-title>
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  padding-bottom: 75px;
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