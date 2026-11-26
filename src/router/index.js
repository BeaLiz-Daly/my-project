import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/Views/Home.vue";
import Create from "@/Views/Create.vue";
import About from "@/Views/About.vue";
const router = createRouter({


    history: createWebHashHistory(),
    routes: [
        { path: '/',
          name: 'Home',
          component: Home
        },
        { path: '/create',
          name: 'Create',
          component: Create
        },
    ],
    scrollBehavior() {return { top: 0 }}
})
export default router