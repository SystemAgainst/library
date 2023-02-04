import {createStore} from "vuex";

export const index = createStore({
    state() {
        return {
            tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? {},
        }
    },
    getters: {
        TASKS: state => {
            return state.tasks;
        },
        ACTIVE_TASK_COUNT: state => {
            return state.tasks.filter(task => task.status === 'active').length;
        },
        TASK_BY_ID: (id, getters) => {
            id = getters.TASKS.find(t => t.id === id);
            console.log(id);
            return id;
        }
    },
    mutations: {
        SET_TASK: (state, task) => {
            state.tasks = task;
        },
        ADD_TASK: (state, task) => {
            state.tasks.push(task);
            localStorage.setItem('my-tasks', task);
        },
    },
    actions: {
        GET_TASK: async (context, task) => {
            const newDate = new Date();
            if (task.date < newDate) {
                task.status = 'cancelled';
            }
            context.commit('get-task', task);
        },
        CHANGE_TASK: (context, task) => {
            context.commit('change-task', task);
        },
    },
});
