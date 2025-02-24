<template>
    <main class="home">
    <div class="home__container">
        <div class="home__list">
            <HomeCard 
            class="home__list-item" 
            v-for="(item) in newsList"
            v-bind:key="item.id"
            v-bind:title="item.title"
            v-bind:description="item.description"
            v-bind:id="item.id"
            v-bind:isFavorite="item.isFavorite"
            />
        </div>
    </div>
    </main>
</template>

<script>
import HomeCard from "@/components/home/HomeCard";
import newsList from "@/json/news.json";
import { useMainStore } from "@/store";
import { mapStores } from "pinia";

export default {
  name: "AppHome",
  components: {
    HomeCard
  },
  computed: {
    ...mapStores(useMainStore),
    newsList() {
      return this.mainStore.newsList;
    }
  },
  data() {
    return {
      
    };
  }
}
</script>

<style lang="less">
.home {
  &__container {
    .container();
  }
  &__list {
    margin-top: 45px;
  }
}
</style>