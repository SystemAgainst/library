import {createRouter, createWebHistory} from "vue-router";
import NewTask from "@/views/NewTask.vue";
import Task from "@/views/Task.vue";
import Tasks from "@/views/Tasks.vue";
import TestPage from "@/components/TestPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/test', component: TestPage },
        { path: '/new', component: NewTask },
        { path: '/task', component: Task },
        { path: '/tasks', component: Tasks, alias: '/' },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});
