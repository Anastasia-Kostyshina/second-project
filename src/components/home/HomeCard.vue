<template>
    <div class="home-card">
        <SvgStar 
          class="home-card__favorite" 
          :class="{'home-card__favorite--active': isFavorite}" 
          @click="mainStore.setFavorite(id)"
        />

        <h4 class="home-card__title" @click="$router.push({name: 'card', params: {id: id}})">{{ title }}</h4>
        <p class="home-card__description">
            {{ description }}
        </p>
    </div>
</template>

<script>
import SvgStar from "@/components/svg/SvgStar";
import { mapStores } from "pinia";
import { useMainStore } from "@/store";

export default {
  name: "HomeCard",
  components: {
    SvgStar
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useMainStore)
  }
}
</script>

<style lang="less">
.home-card {
  position: relative;
  margin-bottom: 15px;
  padding: 20px 15px;
  box-shadow: 0 0 5px 1px @brown;
  background-color: @white;

  &__title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
    cursor: pointer;
  }

  &__description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      @media (hover: hover) {
        color: @light_green;
      };
    }

    &:active {
      color: @light_green;
    }

    &--active {
      color: @light_green;
    }
  }
}
</style>