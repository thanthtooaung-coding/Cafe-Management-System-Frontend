<!-- src/views/ProductsView.vue -->
<template>
    <div>
        <h1>Categories</h1>
        <ul v-if="categories.length">
            <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
        </ul>
        <p v-else>No products found</p>
    </div>
</template>

<script>

import CategoriesApiService from '@/services/CategoriesApiService';

export default {
    data() {
        return {
            categories: []
        };
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            CategoriesApiService.getCategories()
            .then(response => {
                this.categories = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
        }
    }
};
</script>
