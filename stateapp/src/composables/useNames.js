import {ref} from "vue";

export default function() {
  const moreNames = ref(['Heidi', 'Grobi', 'Matula', 'Maria']);
  const addName = (name) => {
    moreNames.value.push(name);
  }
  return {moreNames, addName};
}