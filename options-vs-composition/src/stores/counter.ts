import { ref } from 'vue'
import { defineStore } from 'pinia'

const count = ref(0)

export const useCounterStore = defineStore('counter', () => {
  const title = ref('Counter sagt:')

  const increaseCounter = (amount: number) => {
    count.value += amount
  }

  const decreaseCounter = (amount: number) => {
    count.value += amount
  }

  const oddOrEven = () => {
    return count.value % 2 === 0 ? 'gerade' : 'ungerade'
  }
  return { count, title, increaseCounter, decreaseCounter, oddOrEven }
})
