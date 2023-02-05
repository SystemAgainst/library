import {createRouter, createWebHistory} from "vue-router";
import NewTask from "@/views/NewTask.vue";
import Task from "@/views/Task.vue";
import Tasks from "@/views/Tasks.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/new', component: NewTask },
        { path: '/task/:id', component: Task, props: true },
        { path: '/tasks', component: Tasks, alias: '/' },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});
