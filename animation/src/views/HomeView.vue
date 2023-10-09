<script setup>
import { ref } from "vue";

const nameInput = ref("");
const names = ref([
  "Krümelmonster",
  "Ernie & Bert",
  "Herr von Bödefeld",
  "Lilo Pulver",
  "Susanne Klickerklacker",
]);

const removeInvitee = (name) => {
  console.log(name);
  names.value = names.value.filter((el) => el !== name);
};
const addInvitee = () => {
  names.value.unshift(nameInput.value);
  nameInput.value = "";
};
</script>

<template>
  <main>
    <div class="container">
      <input
        type="text"
        placeholder="lade noch jemanden ein..."
        v-model="nameInput"
        @keydown.enter="addInvitee"
      />
      <TransitionGroup name="invitees">
        <li v-for="name in names" :key="name" @click="removeInvitee(name)">
          {{ name }}
        </li>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 300px;
  margin: 0 auto;
}

.container input {
  margin-top: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #888;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 1px #00000066;
}
ul {
  display: inline;
  list-style: none;
}
li {
  list-style: none;
  width: 300px;
  padding: 5px 10px;
  margin: 3px 0;
  box-shadow: 1px 1px 1px #00000066;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}

.invitees-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.invitees-enter-to {
  opacity: 1;
  transform: scale(1);
}
.invitees-enter-active {
  transition: all 0.5s ease;
}
.invitees-leave-from {
  opacity: 1;
  transform: scale(1);
}
.invitees-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.invitees-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.invitees-move {
  transition: all 0.5s ease;
}
</style>
