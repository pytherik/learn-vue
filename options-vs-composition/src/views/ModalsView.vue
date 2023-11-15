<script setup lang="ts">
import { inject, ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showDarkMode = ref(false)
const showModal = ref(false)
</script>

<template>
  <div class="modals">
    <h1>Hi Leute</h1>
    <div>
      <label>
        Dark mode ?
        <input v-model="showDarkMode" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      :is="Modal"
      :addClass="showDarkMode ? 'dark-modal' : ''"
      v-model="showModal"
      title="Hello fello"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fuga labore molestiae quas
        tenetur voluptatem, voluptatibus. Delectus similique ut voluptates.
      </p>
    </component>
  </div>
</template>

<style scoped></style>

<!--
<script lang="ts">
import Modal from '@/components/Modal.vue'

export default {
  emits: ['hideModal'],
  components: {
    Modal
  }
}
</script>
-->
