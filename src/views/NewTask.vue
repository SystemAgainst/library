<template>
  <form class="card" @submit.prevent="submit" @keydown.enter="submit">
    <h1>Создать новую рекламную кампанию</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "NewTask",
  setup() {
    const store = useStore();
    const router = useRouter();

    let title = ref('')
    let date = ref(null)
    let description = ref('')

    const isValid = computed(() => {
      return title.value !== ''
          && date.value
          && description.value !== '';
    });

    const submit = () => {
      const newTaskObj = {
        id: Date.now().toString(),
        title: title.value,
        date: new Date(date.value).setHours(23,59,59,999),
        description: description.value,
        status: 'active',
      };

      store.commit('ADD_TASK', newTaskObj);
      router.push('/tasks');
    };

    return {
      submit,
      title,
      date,
      description,
      isValid,
    };
  }
}
</script>
