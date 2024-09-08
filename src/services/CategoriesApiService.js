// src/services/CategoriessApiService.js
import apiClient from './ApiService';

export default {
    getCategories() {
        return apiClient.get('/category');
    },

    addCategory(category) {
        return apiClient.post('/category', category);
    },

    updateCategory(categoryId, category) {
        return apiClient.put(`/category/${categoryId}`, category);
    },

    deleteCategory(categoryId) {
        return apiClient.delete(`/category/${categoryId}`);
    },
};
