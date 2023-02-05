import {createStore} from "vuex";

export const index = createStore({
    state() {
        return {
            tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? [],
        }
    },
    getters: {
        TASKS: state => {
            return state.tasks;
        },
        ACTIVE_TASK_COUNT: state => {
            return state.tasks.filter(task => task.status === 'active').length;
        },
        // TASK_BY_ID: (state, id) => {
        //     return state.tasks.find(t => t.id === id);
        // }
    },
    mutations: {
        SET_TASK: (state, task) => {
            state.tasks = task;
        },
        ADD_TASK: (state, task) => {
            state.tasks.push(task);
            // task по умолч объект =>
            localStorage.setItem('my-tasks', JSON.stringify(state.tasks));
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
