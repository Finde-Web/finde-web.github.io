import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import FindeAwards from "../pages/Finde-Awards.vue";
import FindeFoda from "../pages/Finde-Foda.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/finde-awards", component: FindeAwards },
    { path: "/finde-foda", component: FindeFoda },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
