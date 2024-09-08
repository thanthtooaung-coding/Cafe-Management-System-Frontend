<template>
    <li class="nav-item mb-2 mt-2">
        <router-link 
            :to="link"
            class="nav-link"
            :class="{ 'active': isActive, 'text-white': !isActive }"
            aria-current="page"
        >
            <svg class="bi pe-none me-2" width="16" height="16">
                <use :xlink:href="icon"/>
            </svg>
            {{ label }}
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'SidebarLink',
    props: {
        link: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>