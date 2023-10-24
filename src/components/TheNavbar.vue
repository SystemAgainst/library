<template>
  <nav class="navbar">
    <h3>
      Библиотека
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все книги</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
}
</script>

<style scoped>

</style>
