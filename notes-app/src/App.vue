<script setup>
import { ref } from "vue";

let showModal = ref(false);
const newNote = ref("");
const errorMessage = ref("");
const notes = ref([]);

function getRandomColor() {
  const letters = "bcdef".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const addNote = () => {
  errorMessage.value = "";
  if (newNote.value.length < 8)
    return (errorMessage.value = "mehr als 7 Buchstaben bitte!");
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = "";
};
</script>

<template>
  <main>
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <span v-if="errorMessage">{{ errorMessage }}</span>
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="car-list">
        <div
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
          v-for="note in notes"
          :key="note.id"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">
            {{ note.date.toLocaleDateString("de-DE") }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

.car-list {
  display: flex;
  flex-wrap: wrap;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000bb;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 750px;
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

textarea {
  padding: 10px;
  font-size: inherit;
}

.modal span {
  color: indianred;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: mediumvioletred;
  margin-top: 8px;
}

header button {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #333;
  color: #dedeed;
  border-radius: 50%;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12px;
}
</style>
