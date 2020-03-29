<template>
  <div class="container">
    <search-jokes class="mb-3 mt-3" v-on:search-query="searchJokes"/>
    <joke v-for="joke in getJokes" v-bind:key="joke.id" v-bind:id="joke.id" v-bind:joke="joke.joke"></joke>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Joke from "@/components/Joke";
import SearchJokes from "@/components/SearchJokes";
import axios from "axios";

export default {
  name: "index",
  components: {
    Joke,
    SearchJokes
  },
  computed: mapGetters(['getJokes']),
  methods: {
    ...mapActions(['fetchJokes', 'searchJokes']),
  },
  created() {
    this.fetchJokes();
  }
}
</script>

<style scoped>

</style>
