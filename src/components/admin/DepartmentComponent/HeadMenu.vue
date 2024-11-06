<template>
    <div class="head-menu border-0 border-bottom border-secondary-subtle col-12">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <router-link class="btn btn-primary me-2" :to="{ path: '' }">New</router-link>
                <h5 class="mb-0">Departments</h5>
            </div>
            <div class="input-group w-25">
                <input type="text" class="form-control" placeholder="Search..." v-model="searchQuery" />
                <span class="input-group-text" @click="$emit('search', searchQuery)">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div class="pagination d-flex justify-content-center align-items-center">
                <span>Trang {{ currentPage }} / {{ totalPages }}</span>
                <button
                    class="btn btn-secondary rounded-0 mx-1"
                    :disabled="currentPage === 1"
                    @click="$emit('prevPage')"
                >
                    &lt;&lt;
                </button>
                <button
                    class="btn btn-secondary rounded-0"
                    :disabled="currentPage === totalPages"
                    @click="$emit('nextPage')"
                >
                    &gt;&gt;
                </button>
            </div>
            <div class="pagination d-flex justify-content-center align-items-center">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{
                                'active text-primary': activeTab === 'table',
                                'text-dark': activeTab !== 'table',
                            }"
                            @click.prevent="$emit('tab-change', 'table')"
                            href="#"
                        >
                            <i class="fas fa-table"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ 'active text-primary': activeTab === 'card', 'text-dark': activeTab !== 'card' }"
                            @click.prevent="$emit('tab-change', 'card')"
                            href="#"
                        >
                            <i class="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const searchQuery = ref('')

const props = defineProps({
    activeTab: {
        type: String,
        required: true,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    totalPages: {
        type: Number,
        default: 1,
    },
})
</script>

<style scoped>
.head-menu {
    padding: 0.88rem 1rem;
    width: 100%;
    position: relative;
    height: calc(100% - 60px - 0.88rem * 2);
    background-color: var(--color-main);
    transition: var(--tran-05);
    border: 1px solid var(--color-border);
}
</style>
