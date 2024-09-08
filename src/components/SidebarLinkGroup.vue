<template>
    <ul class="nav nav-pills flex-column mb-auto">
        <SidebarLink 
            link="/home"
            label="Home"
            icon="#home"
            :isActive="activeLink === 'home'"
            @click="handleLinkClick('home')" 
        />
        <SidebarLink 
            link="/dashboard"
            label="Dashboard" 
            icon="#speedometer2" 
            :isActive="activeLink === 'dashboard'"
            @click="handleLinkClick('dashboard')"
        />
        <SidebarLink 
            link="/orders" 
            label="Orders" 
            icon="#table" 
            :isActive="activeLink === 'orders'"
            @click="handleLinkClick('orders')"
        />
        <SidebarLink 
            link="/categories" 
            label="Categories" 
            icon="#grid" 
            :isActive="activeLink === 'categories'"
            @click="handleLinkClick('categories')"
        />
        <SidebarLink 
            link="/products" 
            label="Products" 
            icon="#grid" 
            :isActive="activeLink === 'products'"
            @click="handleLinkClick('products')"
        />
        <SidebarLink 
            link="/employees" 
            label="Employees" 
            icon="#people-circle" 
            :isActive="activeLink === 'employees'"
            @click="handleLinkClick('employees')"
        />
        <SidebarLink 
            link="/customers" 
            label="Customers" 
            icon="#people-circle" 
            :isActive="activeLink === 'customers'"
            @click="handleLinkClick('customers')"
        />
    </ul>
</template>

<script>
import SidebarLink from './SidebarLink.vue';

export default {
    name: 'SidebarLinkGroup',
    components: {
        SidebarLink
    },
    props: {
        activeLink: {
            type: String,
            required: true
        }
    },
    methods: {
        handleLinkClick(link) {
            this.$emit('link-click', link);
        }
    }
}
</script>
