<!-- src/views/EmployeesView.vue -->
<template>
    <div class="container mt-4">
        <TableHeader
            :title="'Employees'"
            :selectedPageSize="pageSize"
            :searchQuery="searchQuery"
            @add-btn="addEmployee"
            @change-page-size="handlePageSizeChange"
            @search-entities="handleSearch"
        />

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
                        <td>{{ (currentPage * pageSize) + index + 1 }}</td>
                        <td>{{ employee.staffId }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.position }}</td>
                        <td>{{ employee.email }}</td>
                        <td>{{ employee.phoneNumber }}</td>
                        <td>{{ formatDate(employee.hireDate) }}</td>
                    </tr>
                </tbody>
            </table>

            <TableFooter
                :currentPage="currentPage"
                :totalPages="totalPages"
                @change-page="changePage"
            />
        </div>
        <p v-else>No employees found</p>
    </div>
</template>

<script>
import EmployeesApiService from '@/services/EmployeesApiService';
import TableHeader from './shared/TableHeader.vue';
import TableFooter from './shared/TableFooter.vue';

export default {
    components: {
        TableHeader,
        TableFooter
    },
    data() {
        return {
            employees: [],
            searchQuery: '',
            pageSize: 10,
            currentPage: 0,
            totalPages: 0
        };
    },
    created() {
        this.fetchEmployees();
    },
    methods: {
        fetchEmployees() {
            EmployeesApiService.getEmployees(this.currentPage, this.pageSize, this.searchQuery)
                .then(response => {
                    const data = response.data.data;                                    
                    this.employees = data.content;
                    this.totalPages = data.totalPages;
                    this.currentPage = data.pageNumber;
                })
                .catch(error => {
                    console.error('Error fetching employees:', error);
                });
        },
        changePage(page) {
            if (page >= 0 && page < this.totalPages) {
                this.currentPage = page;
                this.fetchEmployees();
            }
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            return new Date(date).toLocaleDateString(undefined, options);
        },
        addEmployee() {
        },
        handlePageSizeChange(newSize) {
            this.pageSize = newSize;
            this.fetchEmployees();
        },
        handleSearch(query) {
            this.searchQuery = query;
            this.fetchEmployees();
        }
    }
};
</script>
