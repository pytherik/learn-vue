let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
      message2: "Schnauze halten"
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called! this.message =', this.message)
    ;
  },
  created() {
    console.log('created() function called! this.message =', this.message)
  },
  beforeMount() {
    console.log('beforeMount() function called! this.$el =', this.$el)
  },
  mounted() {
    console.log('mounted() function called! this.$el =', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!')
  },
  updated() {
    console.log('updated() function called!')
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!')
  },
  unmounted() {
    console.log('unmounted() function called!')

  }
})

vm.mount('#app');


// setTimeout(() => {
//   vm.mount('#app');
// }, 2000)