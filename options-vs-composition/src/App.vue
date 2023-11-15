<script setup lang="ts">
import { provide, reactive } from 'vue'
import type { User } from '@/userdata'

const userData = reactive<User>({
  name: 'Petra',
  username: 'pitschi'
})

provide('userData', userData)
</script>
<template>
  <div class="user-data">{{ userData.name }}@{{ userData.username }}</div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.user-data {
  position: absolute;
  top: 0;
  right: 0;
  background: beige;
  color: #333;
  padding: 5px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-size: 1.5rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
