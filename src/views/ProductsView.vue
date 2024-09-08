<!-- src/views/ProductsView.vue -->
<template>
    <div>
        <h1>Products</h1>
        <ul v-if="products.length">
            <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>
        <p v-else>No products found</p>
    </div>
</template>

<script>

import ProductApiService from '@/services/ProductsApiService';

export default {
    data() {
        return {
            products: []
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            ProductApiService.getProducts()
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
        }
    }
};
</script>
