<template>
    <div class="favourites">
      <div class="favourites__container">
        <h2 class="favourites__title">Избранное</h2>
        <div class="favourites__list">
            <HomeCard 
            class="favourites__list-item"
            v-for="(item) in newsList.filter((item) => item.isFavorite == true)"
            v-bind:key="item.id"
            v-bind:title="item.title"
            v-bind:description="item.description"
            v-bind:id="item.id"
            v-bind:isFavorite="item.isFavorite"
            />
        </div>
      </div>
    </div>
</template>

<script>
import HomeCard from "@/components/home/HomeCard";
import newsList from "@/json/news.json";
import { useMainStore } from "@/store";
import { mapStores } from "pinia";

export default {
  name: "favourites",
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
.favourites {
  &__container {
    .container();
    margin-top: 20px;
  }
  &__title {
    margin-bottom: 15px;
  }
  &__list {
    margin-top: 45px;
  }
}
</style>