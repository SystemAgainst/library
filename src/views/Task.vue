<template>
  <div class="card" v-if="tasks">
    <h2>{{ taskById.title }}</h2>
    <p><strong>Статус</strong>: <app-status :type="taskById.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(taskById.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ taskById.description }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Рекламной кампании с id = <strong>{{ taskById }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "@/components/AppStatus.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {AppStatus},
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();

    const id = props.id;
    const tasks = computed(() => store.getters.getTasks);
    const taskById = computed(() => tasks.value.find((task) => task.id === id));

    const setStatus = (status) => {
      if (taskById) {
        const updated = {...taskById.value, status};
        store.dispatch('changeTask', updated);
      }
    };

    return {
      tasks,
      taskById,
      setStatus,
    }
  }
}
</script>
