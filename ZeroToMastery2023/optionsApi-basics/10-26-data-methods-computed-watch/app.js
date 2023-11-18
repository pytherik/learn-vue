const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Petra',
      middleName: '',
      lastName: 'Tsessy',
      url: 'https://eberndt.live',
      raw_html: '<a href="https://tsesmetziportfolio.netlify.app/" target="_blank">meine Seite</a>',
      age: 8
    }
  },
  methods: {

    increment() {
      this.age++;
    },
    updateFirstName (action, event) {
      // console.log(action);
      this.firstName = event.target.value;
    },
    addMiddleName(e) {
      this.middleName = e.target.value
    }
  },
  computed: {
    fullName() {
      console.log('full name called');
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 8;
      }, 1000)
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Nicki';
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Nicki',
//       lastName: 'Bubble'
//     }
//   }
// }).mount('#ppa')
