let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    }
  },
  // template: `<h1>{{ message}}</h1>`
})

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello World!",
//     }
//   },
//   render() {
//     return Vue.h(
//         'h1',
//         this.message
//     )
//   }
// }).mount('#app2')

vm.mount('#app');
