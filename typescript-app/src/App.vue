<script setup lang="ts">
enum STATUS {
  EUPHORIC,
  HAPPY,
  UNHAPPY,
  SAD
}

interface Person {
  name: string,
  age: number,
  lucky: STATUS,
  occupation?: string
}

let name:string = "Erik";
let age:number = 53;
let lucky:boolean = false;
let occupation:undefined;

const arr:(number|string)[] = [];

arr.push("Petra");
arr.push(23);
console.log(arr);

const person:Person = {
  name: 'Petra',
  age: 20,
  lucky: STATUS.SAD,
}

person.name = "Julia";
person.occupation = "Escort Girl";
console.log(person);

</script>

<template>
<main>

</main>
</template>

<style scoped>

</style>
