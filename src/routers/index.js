import Vue from 'vue'
import VueRouter from 'vue-router'

import { api_router } from "@/routers/api";
import { web_router } from "@/routers/web";

Vue.use(VueRouter)
const routes = [
    ...web_router,
    ...api_router
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router;