import {defineStore} from "pinia";

export const useNamesStore = defineStore('storeNames', {
  state: () => {
    return {
      namesStore: ['Jon', 'Jane', 'Adam', 'Eva']
    }
  }
})