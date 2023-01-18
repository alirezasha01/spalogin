import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/HomeComponent.vue"
import Users from "./pages/users/UsersGet.vue"
import Map from "./pages/MapOpen.vue"
import Success from "./pages/SuccessFrom.vue"

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/users", name: "users", component: Users},
    {path: "/map", name: "map", component: Map},
    {path: "/success", name: "success", component: Success}

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;