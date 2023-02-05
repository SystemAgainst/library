<template>
  <div>
    <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
    <template v-else>
      <h3 class="text-white">Всего активных задач: 0</h3>
      <div class="card" v-for="task in tasks" :key="task.id">
        <h2 class="card-title">
          {{ task.title }}
          <app-status :type="'done'" />
        </h2>
        <p>
          <strong>
            <small>
              {{ new Date(task.date).toLocaleDateString() }}
            </small>
          </strong>
        </p>
        <button class="btn primary">Посмотреть</button>
      </div>
    </template>
  </div>
</template>

<script>

import AppStatus from "@/components/AppStatus.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {AppStatus},
  setup() {
    const store = useStore();

    const tasks = computed(() => store.getters.TASKS);

    return {
      tasks,
    }
  },
}
</script>
