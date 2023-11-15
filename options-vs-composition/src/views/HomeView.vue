<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

const { countData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()
const appTitle = ref('')
appTitle.value = 'Super Zähler App'
const appTitleRef = ref(null)
</script>

<template>
  <div class="home">
    <h1 ref="appTitleRef">{{ appTitle }}</h1>
    <h2>{{ countData.title }}</h2>
    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ countData.count }}</span>
      <button class="btn" @click="increaseCounter(1)">+</button>
      <button class="btn" @click="increaseCounter(2)">++</button>
    </div>
    <div class="odd-even">
      <p>Dies ist eine {{ oddOrEven }} Zahl</p>
    </div>
    <div class="title-input">
      <label for="title">Gib Titelnamen ein:</label><br />
      <input id="title" type="text" v-model="countData.title" v-autofocus />
    </div>
  </div>
</template>
<style scoped>
.home {
  margin-top: 2rem;
  text-align: center;
}

.btn {
  font-size: 3rem;
  width: 4rem;
  height: 4rem;
  margin: 0 1rem;
  border-radius: 5px;
}

.counter {
  font-size: 2rem;
  padding: 0.6rem 3rem 0.6rem;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.title-input {
  margin-top: 1.5rem;
}

input,
label {
  font-size: 1.5rem;
}
</style>

<!--
<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty() {
      //info perform logicc based on a data property
      return 'ergebnis'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount === 12) alert('ZZZZZZwööööölllffff')
    }
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->
