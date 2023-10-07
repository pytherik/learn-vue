import * as VueRouter from 'vue-router';
import NotFoundView from "@/views/NotFoundView.vue";
import QuizesView from "@/views/QuizesView.vue";
import QuestionsView from "@/views/QuestionsView.vue";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: QuizesView},
    {path: '/home', redirect: '/'},
    {path: '/questions/:id', name: 'questions', component: QuestionsView },
    {path: '/:catchall(.*)*', name: 'not-found', component: NotFoundView },
  ]
})

export default router;
