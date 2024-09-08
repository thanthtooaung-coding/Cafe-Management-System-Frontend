// src/services/ProductsApiService.js
import apiClient from './ApiService';

export default {
    getProducts() {
        return apiClient.get('/product');
    },

    addProduct(product) {
        return apiClient.post('/product', product);
    },

    updateProduct(productId, product) {
        return apiClient.put(`/product/${productId}`, product);
    },

    deleteProduct(productId) {
        return apiClient.delete(`/product/${productId}`);
    },
};
