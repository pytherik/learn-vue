//info DEFINE ROUTING RULES
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PetraView from "@/views/PetraView.vue";
import AllCars from "@/views/AllCarsView.vue";
import CarDetails from "@/components/CarDetails.vue";
import ContactView from "@/views/ContactView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/home', redirect: '/'},
    {path: '/about', name: 'about', component: AboutView},
    {path: '/all_cars', name: 'all_cars', component: AllCars},
    {path: '/car_details/:id', name: 'car_details', component: CarDetails,
    children: [{
        path: "contact", component: ContactView
    },
    ]},
    {path: '/petra', name: 'petra', component: PetraView},
    {path: '/page-not-found', name: 'page-not-found', component: PageNotFoundView},
    {path: '/:catchall(.*)*', name: 'page-not-found', component: PageNotFoundView},
  ]
});

export default router;