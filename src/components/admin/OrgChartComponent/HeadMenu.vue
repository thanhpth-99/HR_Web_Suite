<!-- File: HeadMenu.vue -->
<template>
    <!-- Container for the dropdown button aligned to the top-right -->
    <div class="">
        <div class="dropdown bg-white">
            <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="drop_save"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                OrgChart
            </button>
            <ul class="dropdown-menu" aria-labelledby="drop_save">
                <li><button class="dropdown-item" @click="selectTab('OrgDepartment')">Department</button></li>
                <li><button class="dropdown-item" @click="selectTab('OrgStaff')">Staff</button></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['tab-selected'])

// Emit event to select the tab and close the dropdown menu
const selectTab = (tab) => {
    emit('tab-selected', tab)
}
</script>

<style scoped>
.dropdown-menu {
    min-width: 190px;
    padding: 8px;
    border-radius: 1rem;
    background-color: #fff;
    border: 1px solid #e4e4e7;
}

.dropdown-item {
    font-size: 0.875rem;
    padding: 8px;
    border-radius: 0.625rem;
    transition: all 0.2s ease;
    color: #000;
}

.dropdown-item:hover {
    background-color: var(--secondary-background-color);
    color: #000;
}

.dropdown-item:focus {
    background-color: var(--secondary-background-color);
    color: #000;
}

.dropdown-item:active {
    background-color: var(--secondary-background-color);
    color: #000;
}
</style>
