import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/Home.vue"
import Users from "./pages/users/Users.vue"
import MapGoogle from "./pages/MapGoogle.vue"
import Success from "./pages/Success.vue"

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/users", name: "users", component: Users},
    {path: "/map", name: "map", component: MapGoogle},
    {path: "/success", name: "success", component: Success}

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;