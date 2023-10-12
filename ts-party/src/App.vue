<script setup lang="ts">
import {computed, provide, ref} from "vue";
import InviteeCard from "@/components/InviteeCard.vue";
import {type Invitee, STATUS} from "@/types";

const status = ref(STATUS.HAPPY)
const invitees = ref<Invitee[]>([]);
const name = ref("");
provide("invitees", invitees);

const inviteToParty = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 1000000),
      name: name.value,
      status: status.value
    });
    console.log(invitees.value);
    name.value = "";
    status.value = STATUS.HAPPY;
  }
}

const count = computed<{
  happy: number,
  neutral: number,
  sad: number
}>(() => {
  return invitees.value.reduce((aggr, invitee) => {
    if (invitee.status === STATUS.HAPPY) {
      return {
        ...aggr,
        happy: aggr.happy + 1
      }
    } else if (invitee.status === STATUS.NEUTRAL) {
      return {
        ...aggr,
        neutral: aggr.neutral + 1
      }
    } else {
      return {
        ...aggr,
        sad: aggr.sad + 1
      }
    }
  }, {happy: 0, neutral: 0, sad: 0})
})

</script>

<template>
  <main>
    <div>
      <h1>Geladene Gäste</h1>
      <div class="input-container">
        <input type="text"
               placeholder="Name..."
               v-model="name"
               @keydown.enter="inviteToParty">
        <select v-model="status"
                @keydown.enter="inviteToParty">
          <option :value="STATUS.HAPPY">gut gelaunt</option>
          <option :value="STATUS.NEUTRAL">so lala</option>
          <option :value="STATUS.SAD">traurig</option>
        </select>
        <InviteeCard v-for="invitee in invitees"
                     :key="invitee.id"
                     :invitee="invitee"/>
        <p>Gute Laune : {{ count.happy }}</p>
        <p>solalaLaune: {{ count.neutral }}</p>
        <p>Miese Laune: {{ count.sad }}</p>
      </div>
    </div>
  </main>
</template>


<style scoped>
main {
  color: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}

input, select {
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
  border-radius: 3px;
}

</style>
