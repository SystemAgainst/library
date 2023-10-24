import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem("my-tasks")) ?? [],
    };
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.status === "active").length;
    },
    // TASK_BY_ID: (state, id) => {
    //     return state.tasks.find(t => t.id === id);
    // }
  },
  mutations: {
    SET_TASK(state, task) {
      state.tasks = task;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
      // task по умолч объект =>
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
    CHANGE_TASK(state, task) {
      const idx = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks[idx] = task;
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask: async ({ commit }, task) => {
      const newDate = new Date();
      if (task.date < newDate) {
        task.status = "cancelled";
      }
      commit("SET_TASK", task);
    },
    changeTask: ({ commit }, task) => {
      commit("CHANGE_TASK", task);
    },
  },
});
