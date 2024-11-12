<template>
    <div class="container-fluid mt-3" style="overflow-x: auto">
        <div class="row">
            <HeadMenu
                @tab-change="setActiveTab"
                :activeTab="activeTab"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @prevPage="prevPage"
                @nextPage="nextPage"
                @search="filterDepartmentBySearchQuery"
            />
            <div class="col-12" style="overflow-x: auto">
                <div>
                    <DepartmentTable v-if="activeTab === 'table'" :departments="paginatedDepartments" />
                    <DepartmentCard v-if="activeTab === 'card'" :departments="paginatedDepartments" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import DepartmentTable from './DepartmentTable.vue'
import DepartmentCard from './DepartmentCard.vue'
import { ref, onMounted, computed } from 'vue'
import { get } from '@/stores/https'

const departments = ref([])
const activeTab = ref('table')
const currentPage = ref(1)
const pageSize = ref(6)
const filteredDepartments = ref([])

onMounted(async () => {
    await getDepartments()
})

const totalPages = computed(() => {
    return Math.ceil(filteredDepartments.value.length / pageSize.value)
})

const paginatedDepartments = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredDepartments.value.slice(start, end)
})

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const getDepartments = async () => {
    try {
        const response = await get('/api/v1/departments')
        if (response) {
            departments.value = response.data
            filteredDepartments.value = departments.value
        }
    } catch (error) {
        console.error(error)
    }
}

const setActiveTab = (newTab) => {
    activeTab.value = newTab
    currentPage.value = 1
}

const filterDepartmentBySearchQuery = (query) => {
    filteredDepartments.value = departments.value.filter((phongBan) => {
        const tenPhongBan = phongBan.tenPhongBan ? phongBan.tenPhongBan.toLowerCase() : ''
        const truongPhong = phongBan.truongPhong ? phongBan.truongPhong.toLowerCase() : ''
        return tenPhongBan.includes(query) || truongPhong.includes(query)
    })
}
</script>
