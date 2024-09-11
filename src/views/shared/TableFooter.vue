<!-- TableFooter.vue -->
<template>
    <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination justify-content-center">
            <li 
                class="page-item"
                :class="{ disabled: currentPage === 0 }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click.prevent="$emit('change-page', currentPage - 1)"
                >Previous</a>
            </li>
            <li 
                class="page-item" 
                v-for="page in totalPages" 
                :key="page" 
                :class="{ active: page - 1 === currentPage }"
            >
                <a 
                    class="page-link"
                    href="#" @click.prevent="$emit('change-page', page - 1)"
                >{{ page }}</a>
            </li>
            <li 
                class="page-item"
                :class="{ disabled: currentPage === totalPages - 1 }">
                    <a
                        class="page-link"
                        href="#"
                        @click.prevent="$emit('change-page', currentPage + 1)"
                    >Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 0
        },
        totalPages: {
            type: Number,
            default: 0
        }
    }
};
</script>
