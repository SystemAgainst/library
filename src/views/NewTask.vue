<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
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

    <hr>
    <ul>
      <li>
        <router-link to="/test" >TestPage</router-link>
      </li>
    </ul>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {computed, ref} from "vue";

export default {
  name: "NewTask",
  setup() {
    const title = ref('')
    const date = ref(null)
    const description = ref('')

    const isValid = computed(() => {
      return title.value !== ''
          // && date.value
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

      console.log(newTaskObj);
      // let tasks = this.$store.getters.TASKS;
      // console.log(tasks);
    };

    return {
      submit,
      title,
      date,
      description,
      isValid,
    };
    const test = this.$store.getters.TASKS;
  }
}
</script>
