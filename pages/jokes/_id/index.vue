<template>
  <div class="container">
    <nuxt-link class="btn btn-primary mt-3 mb-3" to="/jokes">Back To Jokes</nuxt-link>
    <div class="card p-3">
      <div class="card-body">
        <h2 class="card-title">{{joke}}</h2>
        <hr>
        <small class="card-text">Joke Id: {{ $route.params.id}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  head() {
    return {
      title: this.joke
    }
  },
  data() {
    return {
      joke: {}
    }
  },
  async created() {

    const config = {
      headers: {
        Accept: 'application/json'
      }
    };

    try {
      const response = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
      this.joke = response.data.joke;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>

</style>
