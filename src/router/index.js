import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/Views/Home.vue";
import Saved from "@/Views/Saved.vue";
import About from "@/Views/About.vue";
const router = createRouter({


    history: createWebHashHistory(),
    routes: [
        { path: '/',
          name: 'Home',
          component: Home
        },
        { path: '/saved',
          name: 'Saved',
          component: Saved
        },
    ],
    scrollBehavior() {return { top: 0 }}
})
export default router