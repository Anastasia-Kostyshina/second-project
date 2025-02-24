import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    newsList: []
  }),
  getters: {
    listItem: (state) => (id) => {
      return state.newsList.find(item => item.id == id);
    }
  },
  actions: {
    setFavorite(id) {
      this.newsList.forEach((item) => {
        if (item?.id == id) item.isFavorite = !item.isFavorite;
      })
    }
  }
});