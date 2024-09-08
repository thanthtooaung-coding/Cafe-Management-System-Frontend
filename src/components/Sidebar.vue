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
    data() {
        return {
        activeLink: 'home'
        };
    },
    methods: {
        setActiveLink(link) {
            this.activeLink = link;
        }
    }
}
</script>

<style scoped>
    .sidebar {
        width: 280px;
        min-height: 100vh;
    }
</style>