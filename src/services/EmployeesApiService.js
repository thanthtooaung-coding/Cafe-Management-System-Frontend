// src/services/EmployeesApiService.js
import apiClient from './ApiService';

export default {
    getEmployees() {
        return apiClient.get('/employee');
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
