<!-- src/views/EmployeesView.vue -->
<template>
    <div class="container mt-4">
        <h1>Employees</h1>
        <div v-if="employees.length">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Staff ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Hire Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employees" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ employee.staffId }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.position }}</td>
                        <td>{{ employee.email }}</td>
                        <td>{{ employee.phoneNumber }}</td>
                        <td>{{ formatDate(employee.hireDate) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p v-else>No employees found</p>
    </div>
</template>

<script>

import EmployeesApiService from '@/services/EmployeesApiService';

export default {
    data() {
        return {
            employees: []
        };
    },
    created() {
        this.fetchEmployees();
    },
    methods: {
        fetchEmployees() {
            EmployeesApiService.getEmployees()
            .then(response => {
                console.log(response);
                
                this.employees = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching employees:', error);
            });
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            return new Date(date).toLocaleDateString(undefined, options);
        }
    }
};
</script>
