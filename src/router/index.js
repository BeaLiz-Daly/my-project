import { createRouter, createWebHashHistory } from 'vue-router'
import ExerciseDetailView from '../views/Profile.vue'
const router = createRouter({

    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'workout', component: WorkoutView },
        { path: '/article/:id', name: 'article-detail', component: ExerciseDetailView },
        { path: '/manage', name: 'manage', component: ManageWorkoutView },
    ],
    scrollBehavior() {return { top: 0 }}
})
export default router