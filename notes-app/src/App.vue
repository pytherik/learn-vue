<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
</script>

<template>
  <main>
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <textarea
          v-model="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <button>Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
            cupiditate et!
          </p>
          <p class="date">05.10.2023</p>
        </div>
        <div class="card">
          <p class="main-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
            cupiditate et!
          </p>
          <p class="date">05.10.2023</p>
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

.cards-container {
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
  background-color: chocolate;
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
