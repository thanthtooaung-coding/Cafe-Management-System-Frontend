<template>
    <div class="container mt-4">
        <div class="row mb-3">
            <div class="col-md-6">
                <h1>Employees</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end align-items-center">
                <button class="btn btn-primary" @click="addEmployee">Add Employee</button>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-md-6 d-flex align-items-center">
                <label for="pageSize" class="me-2">Items per page:</label>
                <select
                    id="pageSize"
                    v-model="pageSize"
                    @change="fetchEmployees"
                    class="form-select"
                    style="width: auto;"
                >
                    <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
                </select>
            </div>
            <div class="col-md-6">
                <input
                    type="text"
                    v-model="searchQuery"
                    @input="fetchEmployees"
                    placeholder="Search employees"
                    class="form-control"
                />
            </div>            
        </div>

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

            <nav aria-label="Page navigation" class="mt-4">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: currentPage === 0 }">
                        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
                    </li>
                    <li 
                        class="page-item" 
                        v-for="page in totalPages" 
                        :key="page" 
                        :class="{ active: page - 1 === currentPage }"
                    >
                        <a class="page-link" href="#" @click.prevent="changePage(page - 1)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages - 1 }">
                        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        <p v-else>No employees found</p>
    </div>
</template>

<script>
import EmployeesApiService from '@/services/EmployeesApiService';

export default {
    data() {
        return {
            employees: [],
            searchQuery: '',
            pageSize: 10,
            currentPage: 0,
            totalPages: 0,
            pageSizes: [5, 10, 20, 50]
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
            
        }
    }
};
</script>