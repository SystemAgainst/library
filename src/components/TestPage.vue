<template>
  <div class="card">
    <h1>
      {{ $store.getters.TASK_BY_ID }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "TestPage",
}
</script>

<style scoped>

</style>
