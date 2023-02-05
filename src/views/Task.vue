<template>
  <div class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <app-status :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>{{ task.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "@/components/AppStatus.vue";
import {useStore} from "vuex";

export default {
  components: {AppStatus},
  props: {
    task: Object,
  },
  setup() {
  }
}
</script>
