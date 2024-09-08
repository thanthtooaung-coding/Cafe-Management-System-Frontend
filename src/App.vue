<template>
  <main class="d-flex flex-nowrap">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar
  }
}
</script>