// src/services/EmployeesApiService.js
import apiClient from './ApiService';

export default {
    getEmployees(page = 0, size = 10, search = '') {
        return apiClient.get('/employee/page', {
            params: {
                page: page,
                size: size,
                search: search
            }
        });
    },

    addEmployee(employee) {
        return apiClient.post('/employee', employee);
    },

    updateEmployee(employeeId, employee) {
        return apiClient.put(`/employee/${employeeId}`, employee);
    },

    deleteEmployee(employeeId) {
        return apiClient.delete(`/employee/${employeeId}`);
    },
};
