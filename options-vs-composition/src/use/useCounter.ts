import { computed, onMounted, reactive, watch } from 'vue'

//info countData ist global, weil sie nicht Teil der useCounter function ist
//     deswegen ist der count Wert über Seitenwechsel persistent
const countData = reactive({
  count: 0,
  title: 'Der Zähler',
  oddOrEven: 'gerade'
})

export function useCounter() {
  watch(
    () => countData.count,
    (newCount) => {
      if (newCount === 10) alert('Zehhhhhnnnnn!!!!')
    }
  )

  const increaseCounter = (amount: number) => {
    countData.count += amount
  }

  const decreaseCounter = (amount: number) => {
    countData.count -= amount
  }

  const oddOrEven = computed(() => {
    return countData.count % 2 === 0 ? 'gerade' : 'ungerade'
  })

  onMounted(() => {
    console.log('do stuff related to counter')
  })
  return {
    countData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
