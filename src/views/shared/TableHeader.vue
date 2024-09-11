<!-- TableHeader.vue -->
<template>
    <div>
        <div class="row mb-3">
            <div class="col-md-6">
                <h1>{{ title }}</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-end align-items-center">
                <button 
                    class="btn btn-primary"
                    @click="$emit('add-btn')"
                >Add Employee</button>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-md-6 d-flex align-items-center">
                <label for="pageSize" class="me-2">Items per page:</label>
                <select
                    id="pageSize"
                    v-model="localPageSize"
                    @change="emitPageSize"
                    class="form-select"
                    style="width: auto;"
                >
                    <option
                        v-for="size in pageSizes"
                        :key="size"
                        :value="size"
                    >{{ size }}</option>
                </select>
            </div>
            <div class="col-md-6">
                <input
                    type="search"
                    v-model="localSearchQuery"
                    @input="emitSearchQuery"
                    placeholder="Search employees"
                    class="form-control"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Employees'
        },
        selectedPageSize: {
            type: Number,
            default: 10
        },
        searchQuery: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            pageSizes: [5, 10, 20, 50],
            localPageSize: this.selectedPageSize,
            localSearchQuery: this.searchQuery
        };
    },
    methods: {
        emitPageSize() {
            this.$emit('change-page-size', this.localPageSize);
        },
        emitSearchQuery() {
            this.$emit('search-entities', this.localSearchQuery);
        }
    },
    watch: {
        selectedPageSize(newSize) {
            this.localPageSize = newSize;
        },
        searchQuery(newQuery) {
            this.localSearchQuery = newQuery;
        }
    }
};
</script>
