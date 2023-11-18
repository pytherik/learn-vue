let vm = Vue.createApp({

})

vm.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: 'Hello again'
    }
  }
})
vm.mount('#app');
