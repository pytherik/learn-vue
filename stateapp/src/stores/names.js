import {defineStore} from "pinia";

export const useNamesStore = defineStore('mynames', {
  state: () => {
    return {
      names: ['Jon', 'Jane', 'Adam', 'Eva']
    }
  },
  actions: {
    addMyName(name) { this.names.push(name)}
  }
})
