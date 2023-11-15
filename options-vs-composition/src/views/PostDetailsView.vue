<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const id = ref(0)
id.value = Number(route.params.id)

const router = useRouter()

const showPostId = () => {
  alert(`Die Id von diesem Post ist ${id.value}`)
}

const goHomeIn3Secs = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}
const goToFirstPost = () => {
  id.value = 1
  router.push({
    name: 'postDetails',
    params: {
      id: id.value
    }
  })
}
</script>

<template>
  <div class="post-details">
    <h1>Post Details</h1>
    <p>Dies ist Post #{{ id }}</p>
    <div>
      <button class="btn-round" @click="showPostId">Id</button>
    </div>
    <div>
      <button class="btn" @click="goHomeIn3Secs">3 Sekunden nach hause</button>
    </div>
    <div>
      <button class="btn" @click="goToFirstPost">besuch den ersten Post</button>
    </div>

    <RouterLink to="/posts">&lt; zurück</RouterLink>
  </div>
</template>

<style scoped>
p {
  margin: 1rem 0;
}

.btn-round {
  padding: 7px 9px;
  margin-bottom: 1rem;
  border-radius: 50%;
}
</style>
