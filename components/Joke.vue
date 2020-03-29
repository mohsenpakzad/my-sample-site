<template>
  <nuxt-link v-bind:to="'jokes/' + id">
    <div class="border p-2 card">
      <p>{{ joke }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Joke",
  props: ['joke', 'id']
}
</script>

<style scoped>

</style>
