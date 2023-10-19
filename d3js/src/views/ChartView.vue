<script setup lang="ts">
import Chart, { type ChartConfiguration, type ChartItem } from 'chart.js/auto'
import { onMounted } from 'vue'

const labels = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
]

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Mein erster Datensatz',
      backgroundColor: '#ff88aa',
      data: [0, 10, 5, 2, 20, 30, 45, 4, 22, 23, 34, 67]
    },
    {
      label: 'Mein erster Datensatz',
      backgroundColor: '#269AA9',
      data: [16, 4, 12, 2, 30, 22, 45, 4, 22, 23, 12, 35]
    },
    {
      label: 'Mein erster Datensatz',
      backgroundColor: '#ddffcc',
      data: [120, 50, 21, 2, 20, 80, 48, 12, 65, 44, 67, 76]
    }
  ]
}

const config: ChartConfiguration = {
  type: 'line',
  data: data,
  options: {}
}
onMounted(() => {
  const canvasTag = <ChartItem>document.getElementById('myChart')
  new Chart(canvasTag, config)
})
</script>

<template>
  <h2>ChartJs</h2>
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
