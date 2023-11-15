<script setup lang="ts">
import { User } from '@/userdata'
import { inject } from 'vue'

const userData: User = inject('userData')

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Kein Titel'
  },
  addClass: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <teleport to=".modals-container">
    <div class="modal" v-if="modelValue">
      <div class="inner-modal" :class="addClass">
        <h1>{{ props.title }}</h1>
        <h2>Du bist {{ userData.username }}</h2>
        <slot />
        <button @click="emit('update:modelValue', false)">Hide modal</button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #00000044;
}

.inner-modal {
  margin-top: 10rem;
  width: 450px;
  background-color: beige;
  color: #222;
  padding: 15px;
}

.dark-modal {
  background-color: #333;
  color: hotpink;
}
</style>

<!--
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'no title'
    }
  }
}
</script>
-->
