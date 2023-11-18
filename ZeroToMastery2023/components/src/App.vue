<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";

export default {
  name: "App",
  components: { Greeting, User },
  data() {
    return {
      msg: "Hellooo!",
      age: 23
    }
  }
}
</script>

<template>
  <h3>{{ msg }}</h3>
  <button @click="age++">älter</button>
  <Greeting :age="age"/>
  <User :age="age"/>
</template>

<style>

::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #333;
  color: #dedded;
  width: 100vw;
  height: 100vh;
}

</style>
