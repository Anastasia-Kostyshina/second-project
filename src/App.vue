<template>
  <div class="app">
    <PageHeader class="app__header" />

    <router-view class="app__layout" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import newsList from "@/json/news.json";
import { useMainStore } from "@/store";
import { mapStores } from "pinia";

export default {
  name: "App",
  components: {
    PageHeader
  },
  computed: {
    ...mapStores(useMainStore)
  },
  created() {
    this.mainStore.newsList = newsList; //инициализация листа при создании приложения
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body,
html {
  font-size: 16px;
  font-family: @font2;
}

body {
  background-color: @light_gray;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@keyframes flicker {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
