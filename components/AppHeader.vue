<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand">My Joke Site</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/jokes">Jokes <span class="sr-only">(current)</span></nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>
