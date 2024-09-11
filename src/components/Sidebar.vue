<template>
    <div 
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style="">
        <SidebarHeader />
        <hr>        
        <SidebarLinkGroup 
            :active-link="activeLink"
            @link-click="setActiveLink"
        />
        <hr>
        <SidebarDropdown />
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SidebarDropdown from './SidebarDropdown.vue';
import SidebarHeader from './SidebarHeader.vue';
import SidebarLink from './SidebarLink.vue';
import SidebarLinkGroup from './SidebarLinkGroup.vue';

export default {
    components: {
        SidebarLink,
        SidebarHeader,
        SidebarLinkGroup,
        SidebarDropdown
    },
    setup() {
        const route = useRoute();
        const activeLink = ref(route.path.substring(1));

        watch(() => route.path, (newPath) => {
            activeLink.value = newPath.substring(1);
        });

        const setActiveLink = (link) => {
            activeLink.value = link;
        };

        return {
            activeLink,
            setActiveLink
        };
    }
}
</script>

<style scoped>
    .sidebar {
        width: 280px;
        min-height: 100vh;
    }
</style>