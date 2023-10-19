<script setup lang="ts">
import Chart, { type ChartConfiguration, type ChartItem } from 'chart.js/auto'
import { onMounted } from 'vue'
const yesNo = new Map()
yesNo.set('0', 23)
yesNo.set('1', 45)
console.log(yesNo)
const labels = ['Ja', 'Nein']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Mein erster Datensatz',
      backgroundColor: ['#269aa9', '#ff88aa'],
      data: [yesNo.get('1'), yesNo.get('0')]
    }
  ]
}

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Kaffee oder Tee'
      }
    }
  }
}

onMounted(() => {
  const canvasTag = <ChartItem>document.getElementById('myChart')
  new Chart(canvasTag, config)
})
</script>

<template>
  <h2>{{}}</h2>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<style scoped>
div {
  width: 500px;
  height: 200px;
}
</style>
