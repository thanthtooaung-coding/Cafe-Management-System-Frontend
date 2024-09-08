import CategoriesView from "@/views/CategoriesView.vue";
import CustomersView from "@/views/CustomersView.vue";
import DashboardView from "@/views/DashboardView.vue";
import EmployeeView from "@/views/EmployeesView.vue";
import HomeView from "@/views/HomeView.vue";
import OrdersView from "@/views/OrdersView.vue";
import ProductsView from "@/views/ProductsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: HomeView,
        },
        {
            path: '/dashboard',
            component: DashboardView,
        },
        {
            path: '/orders',
            component: OrdersView,
        },
        {
            path: '/categories',
            component: CategoriesView,
        },
        {
            path: '/products',
            component: ProductsView,
        },
        {
            path: '/employees',
            component: EmployeeView,
        },
        {
            path: '/customers',
            component: CustomersView,
        },
    ]
});

export default router;