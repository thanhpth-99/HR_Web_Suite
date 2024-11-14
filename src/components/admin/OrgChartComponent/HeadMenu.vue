<!-- File: HeadMenu.vue -->
<template>
    <!-- Container for the dropdown button aligned to the top-right -->
    <div class="">
        <div class="dropdown">
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
/* Scoped CSS if needed */
</style>
