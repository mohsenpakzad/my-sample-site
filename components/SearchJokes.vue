<template>
  <div class="card border-dark p-3">
    <form>
      <div class="form-group" v-on:submit.prevent="onSubmit">
        <label for="exampleInputEmail1">Search Jokes</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder="Search Jokes..." v-model="query">
      </div>
      <button type="submit" class="btn btn-primary">Search Jokes</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchJokes",
  data() {
    return {
      query: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-query', this.query);
      this.query = '';
    }
  }
}
</script>

<style scoped>

</style>
