<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Viel Spass'
    }
  }
}
</script>

<template>
<p v-if="age > 19">{{ msg }}</p>
<p v-else>Du darfst nich mitspielen</p>
</template>

<style scoped lang="scss">

p:hover {
  color: darken(hotpink, 15%);
}

</style>