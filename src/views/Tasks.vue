<template>
  <div>
    <h1 class="text-white center" v-if="tasks.length === 0">Книг пока нет</h1>
    <template v-else>
      <div class="card-title">
        <h3 class="text-white">Всего книг: {{ activeTask }}</h3>
        <the-select
          :type="typeDefault"
          :selected="selected"
          :options="statusesList"
          @select="statusSelect"
        />
      </div>
      <div class="card" v-for="task in tasks" :key="task.id">
        <h2 class="card-title" v-if="selected">
          {{ task.title }}
          <app-status :type="task.status" />
        </h2>
        <p>
          <strong>
            <small>
              {{ new Date(task.date).toLocaleDateString() }}
            </small>
          </strong>
        </p>
        <button class="btn primary" @click="openTask(task.id)">
          Посмотреть
        </button>
      </div>
    </template>
  </div>
</template>

<script>

import AppStatus from "@/components/AppStatus.vue";
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";
import {useRouter} from "vue-router";
import TheSelect from "@/components/TheSelect.vue";

export default {
  components: {TheSelect, AppStatus},

  setup() {
    const store = useStore();
    const router = useRouter();
    const tasks = computed(() => store.getters.getTasks);
    const activeTask = computed(() => store.getters.getActiveTasks);

    const openTask = (taskId) => {
      router.push(`/task/${taskId}`);
    };

    const typeDefault = 'active';

    // const statuses = {
    //   active: 'Активен',
    //   cancelled: 'Отменен',
    //   done: 'Завершен',
    //   pending: 'Выполняется',
    // };
    const statusesList = [
      { name: 'Активен', value: 'active' },
      { name: 'Отменен', value: 'cancelled' },
      { name: 'Завершен', value: 'done' },
      { name: 'Выполняется', value: 'pending' },
    ];

    const selected = 'Активен';

    const statusSelect = (status) => {
      this.selected = status.name;
      if (this.selected === this.statuses.name) {
        return tasks;
      }
    };

    // const status = ref(statuses[props.type]);

    return {
      typeDefault,
      activeTask,
      tasks,
      openTask,
      statusesList,
      selected,
      statusSelect,
    };
  },
};
</script>
